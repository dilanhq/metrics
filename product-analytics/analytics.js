import posthog from 'posthog-js';

posthog.init('<YOUR_INIT>', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
});