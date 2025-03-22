import CreateCalendarEvents from '@/components/CreateCalendarEvents';
import Login from '../components/Login';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <main>
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
      <footer className="mt-8">
        <div>
          <Link href="privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <Link href="terms-of-service">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
