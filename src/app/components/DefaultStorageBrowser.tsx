"use client"
import { StorageBrowser } from '@aws-amplify/ui-react-storage';
import "@aws-amplify/ui-react-storage/storage-browser-styles.css";
import "@aws-amplify/ui-react/styles.css";


// these should match access patterns defined in amplify/storage/resource.ts
const defaultPrefixes = [
  'public/',
  (identityId: string) => `protected/${identityId}/`,
  (identityId: string) => `private/${identityId}/`,
];

export default function DefaultStorageBrowser() {
  return (
    <StorageBrowser defaultPrefixes={defaultPrefixes} />
  )
}