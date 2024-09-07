import outputs from "@/../amplify_outputs.json";
import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
// import '@aws-amplify/ui-react-storage/storage-browser-styles.css';
import "@aws-amplify/ui-react-storage/styles.css";
// import "@aws-amplify/ui-react/styles.css";
import { elementsDefault } from '@aws-amplify/ui-react-storage/browser';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);

// these should match access patterns defined in amplify/storage/resource.ts
const defaultPrefixes = [
  'public/',
  (identityId: string) => `protected/${identityId}/`,
  (identityId: string) => `private/${identityId}/`,
];

export const { StorageBrowser } = createStorageBrowser({
  elements: elementsDefault,
  config: createAmplifyAuthAdapter({
    options: {
      defaultPrefixes
    },
  }),
});