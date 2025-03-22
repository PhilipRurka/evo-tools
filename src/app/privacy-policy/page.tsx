export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-800">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

      <p className="mb-10 text-sm text-gray-500">
        <strong>Effective Date:</strong> March 22, 2025
        <br />
        <strong>Last Updated:</strong> March 22, 2025
      </p>

      <section className="mb-8">
        <p>
          Welcome to <strong>Evo Tools</strong> (“we”, “our”, or “us”). This privacy policy explains how we handle your
          information when you use our application to connect your Google Calendar with schedules provided by Evolia.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">1. Information We Access</h2>
        <p>When you use Evo Tools, we request limited access to your Google account in order to:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Authenticate you via Google Sign-In</li>
          <li>Create calendar events on your behalf based on Evolia schedules</li>
        </ul>
        <p className="mt-2">We use the following Google scopes:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>
            <code>https://www.googleapis.com/auth/calendar.events</code> – to create events
          </li>
          <li>
            <code>openid</code>, <code>email</code>, <code>profile</code> – for sign-in
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">2. What We Store</h2>
        <p>
          We do <strong>not</strong> collect, log, or permanently store:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Your email address</li>
          <li>Your calendar data</li>
          <li>Any access or refresh tokens</li>
          <li>Any personal information</li>
        </ul>
        <p className="mt-2">
          There is <strong>no database</strong> or backend storage involved in the use of Evo Tools.
        </p>
        <p className="mt-2">
          All authentication and calendar interactions happen securely in-session and are not persisted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">3. How We Use Your Information</h2>
        <p>
          The information accessed through Google is used <strong>solely</strong> to:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Authenticate you temporarily</li>
          <li>Create calendar events that reflect your Evolia schedule</li>
        </ul>
        <p className="mt-2">We do not use this information for analytics, marketing, or data tracking of any kind.</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">4. Data Security</h2>
        <p>
          Evo Tools communicates with Google APIs using encrypted HTTPS connections. Since we do not store data or
          maintain user accounts, the risk of exposure is minimized.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">5. Third-Party Services</h2>
        <p>Evo Tools relies on the following third-party services:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>
            <strong>Google OAuth 2.0 & Google Calendar API</strong> – for authentication and event creation
          </li>
        </ul>
        <p className="mt-2">
          You can review Google's privacy policy here:{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://policies.google.com/privacy
          </a>
        </p>
        <p className="mt-2">
          You can revoke access to Evo Tools at any time:{' '}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://myaccount.google.com/permissions
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">6. Children's Privacy</h2>
        <p>
          Evo Tools is not intended for children under the age of 13 and does not knowingly collect data from anyone in
          this age group.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">7. Changes to This Policy</h2>
        <p>
          We may update this privacy policy to reflect changes to our practices or services. Any updates will be posted
          on this page with a new effective date.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">8. Contact Us</h2>
        <p>If you have any questions or concerns about this privacy policy, please contact us at:</p>
        <p className="mt-2">
          📧{' '}
          <a href="mailto:privacy@evotools.app" className="text-blue-600 underline">
            hey@philiprurka.com
          </a>
        </p>
      </section>
    </main>
  );
}
