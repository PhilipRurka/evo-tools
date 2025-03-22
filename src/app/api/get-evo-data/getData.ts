import { MembersRoot } from '@/types/members';
import { CatchError, GenericObject } from '@/types/utility';

type GetDate = (param: { accessToken: string; groupId: string }) => Promise<
  {
    endsAt: number;
    note: string;
    location: string;
    subLocations: string;
    skill: string;
    startsAt: number;
  }[]
>;

const getData: GetDate = async ({ accessToken, groupId }) => {
  try {
    const memberResponse = await fetch(
      `https://api.evolia.com/v1/groups/${groupId}/events/grouped/get`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'x-evo-platform': 'EVOLIA',
          'x-evo-timezone': 'America/Toronto',
          'x-evo-version': '9.10.3',
        },
        body: JSON.stringify({
          forMemberIds: ['6716723a2549d8c8451ef067'],
          locale: 'en',
          fromDate: Date.now(),
          toDate: Date.now() + 14 * 24 * 60 * 60 * 1000, // 7 days from now,
          groupBy: 'member',
          sortBy: 'name',
          includeClockingDescriptions: true,
          includeInterested: true,
          includeNonWorkingMembers: true,
          simplified: true,
          withCoworkers: false,
          withInvites: true,
          withStats: false,
        }),
      },
    );

    const memberRes = (await memberResponse.json()) as MembersRoot;

    const shifts = memberRes.struct[0].children;
    const locations: GenericObject = {};
    const subLocations: { [key: string]: string } = {};
    const skills: { [key: string]: string } = {};

    memberRes.data.locations.forEach((item) => {
      locations[item._id] = item.locData.abbrev;
    });

    memberRes.data.subLocations.forEach((item) => {
      subLocations[item._id] = item.names.fr;
    });

    memberRes.data.skills.forEach((item) => {
      skills[item._id] = item.abbrev;
    });

    return shifts.map((item) => ({
      endsAt: item.endsAt,
      note: item.note,
      location: locations[item.locationId] || 'Unknown',
      subLocations: subLocations[item.subLocationId] || 'Unknown',
      skill: skills[item.skillId] || 'Unknown',
      startsAt: item.startsAt,
    }));
  } catch (err) {
    const error = err as CatchError;
    throw new Error(error.message);
  }
};

export default getData;
