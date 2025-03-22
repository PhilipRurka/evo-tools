import CreateCalendarEvents from '@/components/CreateCalendarEvents';
import Login from '../components/Login';

export default function Home() {
  return (
    <main className="p-8">
      <h1>Evo Tools</h1>
      <p>
        Documentation can be found{' '}
        <a className="text-blue-500" href="https://github.com/PhilipRurka/evo-tools">
          here
        </a>
        .
      </p>
      <Login />
      <CreateCalendarEvents />
    </main>
  );
}
