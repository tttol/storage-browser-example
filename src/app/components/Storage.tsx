// "use client"
import { StorageBrowser } from '@aws-amplify/ui-react-storage';

// these should match access patterns defined in amplify/storage/resource.ts
const defaultPrefixes = [
  'public/',
  (identityId: string) => `protected/${identityId}/`,
  (identityId: string) => `private/${identityId}/`,
];

export default function Storage() {
  return (
    <StorageBrowser defaultPrefixes={defaultPrefixes} />
  )
}