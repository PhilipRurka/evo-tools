import CreateCalendarEvents from '@/components/CreateCalendarEvents';
import Login from '../components/Login';

export default function Home() {
  return (
    <main className="p-8">
      <h1>Evo Tools</h1>
      <Login />
      <CreateCalendarEvents />
    </main>
  );
}
