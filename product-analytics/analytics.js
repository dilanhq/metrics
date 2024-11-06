import posthog from 'posthog-js'

posthog.init('<YOUR_PROJECT_API_KEY>',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)