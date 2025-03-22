'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function CreateCalendarEvents() {
  const { data: session } = useSession();

  const [accessToken, setAccessToken] = useState('');
  const [groupId, setGroupId] = useState('');

  const createEvent = async () => {
    const response = await fetch('/api/get-evo-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken, groupId }),
    });

    if (response.ok) {
      alert('Event created successfully!');
    } else {
      alert('Failed to create event.');
    }
  };

  if (!session) return null;

  return (
    <div>
      <input
        type="text"
        placeholder="Access Token"
        value={accessToken}
        onChange={(event) => setAccessToken(event.target.value)}
        className="mt-4 block rounded border p-2"
      />
      <input
        type="text"
        placeholder="Group Id"
        value={groupId}
        onChange={(event) => setGroupId(event.target.value)}
        className="mt-2 block rounded border p-2"
      />
      <button
        onClick={createEvent}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Create events
      </button>
    </div>
  );
}
