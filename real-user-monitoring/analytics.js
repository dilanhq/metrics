import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '<YOUR_APPLICATION_ID>',
    clientToken: '<YOUR_CLIENT_TOKEN>',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: '<YOUR_SITE>',
    service: '<YOUR_SERVICE>',
    env: '<YOUR_ENVIRONMENT>',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});
