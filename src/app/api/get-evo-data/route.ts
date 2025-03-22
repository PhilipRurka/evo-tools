import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import getData from './getData';
import { google } from 'googleapis';
import { CatchError } from '@/types/utility';

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  const { accessToken, groupId } = await req.json();

  const decodedAccessToken = jwtDecode(accessToken);

  if (!session || !session.accessToken || !decodedAccessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await getData({ accessToken, groupId });

  console.log(JSON.stringify(data, null, 2));

  try {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: session.accessToken });

    const calendar = google.calendar({ version: 'v3', auth });

    const events = data.map((item) => ({
      summary: `${item.location} - ${item.skill}, ${item.subLocations}`,
      description: item.note,
      start: {
        dateTime: new Date(item.startsAt).toISOString(),
        timeZone: 'UTC',
      },
      end: { dateTime: new Date(item.endsAt).toISOString(), timeZone: 'UTC' },
    }));

    const insertions = events.map((event) => {
      // const cleanId =
      //   `${event.summary}-${event.description}-${event.start.dateTime}-${event.end.dateTime}`
      //     .replace(/[^a-zA-Z0-9_-]/g, '0')
      //     .replace(/[^a-v0-9]/g, '');

      return calendar.events.insert({
        calendarId: 'primary',
        requestBody: {
          ...event,
          // id: cleanId,
        },
      });
    });

    await Promise.all(insertions);

    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    const error = err as CatchError;

    console.error('Error creating event:', error.message);

    if (error.message === 'The requested identifier already exists.')
      return NextResponse.json({}, { status: 200 });

    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 },
    );
  }
};
