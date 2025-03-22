export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-800">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>

      <p className="mb-10 text-sm text-gray-500">
        <strong>Effective Date:</strong> March 22, 2025
      </p>

      <section className="mb-8">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of <strong>Evo Tools</strong> (“we”, “our”, or
          “us”). By using Evo Tools, you agree to be bound by these Terms. If you do not agree, please do not use the
          application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">1. Description of Service</h2>
        <p>
          Evo Tools provides a simple interface that allows users to authenticate via Google and create calendar events
          based on work schedules provided by Evolia. The app uses the Google Calendar API and Google OAuth for
          functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">2. User Responsibilities</h2>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>You agree to use Evo Tools only for lawful purposes.</li>
          <li>You are responsible for any content or data you generate using the application.</li>
          <li>You must not attempt to reverse-engineer, interfere with, or disrupt the service.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">3. Data Privacy</h2>
        <p>
          Evo Tools does not store personal information, user emails, access tokens, or calendar data. Authentication
          and calendar interactions occur securely and temporarily during your session. Please refer to our{' '}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>{' '}
          for more details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">4. Third-Party Services</h2>
        <p>
          Evo Tools uses third-party services such as Google Calendar and OAuth. By using the app, you also agree to
          comply with the terms of those services:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>
            Google Terms of Service:{' '}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://policies.google.com/terms
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">5. Limitation of Liability</h2>
        <p>
          Evo Tools is provided “as is” without warranties of any kind. We are not liable for any damages or losses
          resulting from the use or inability to use the service, including but not limited to missed events, schedule
          errors, or data sync issues.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">6. Modifications</h2>
        <p>
          We may update these Terms at any time. Changes will be posted on this page with an updated effective date.
          Continued use of the app after changes constitutes acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate access to Evo Tools at our discretion, without notice, especially
          if you violate these Terms or misuse the service.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-semibold">8. Contact</h2>
        <p>If you have any questions or concerns about these Terms, feel free to contact us at:</p>
        <p className="mt-2">
          📧{' '}
          <a href="mailto:support@evotools.app" className="text-blue-600 underline">
            hey@philiprurka.com
          </a>
        </p>
      </section>
    </main>
  );
}
