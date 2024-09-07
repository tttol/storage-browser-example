import outputs from "@/../amplify_outputs.json";
import { Flex } from "@aws-amplify/ui-react";
import { createAmplifyAuthAdapter, createStorageBrowser, elementsDefault } from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";
import { Amplify } from "aws-amplify";

Amplify.configure(outputs);

const input = {
    elements: elementsDefault,
    config: createAmplifyAuthAdapter({
      options: {
        defaultPrefixes: [
            'public/',
            (identityId: string) => `protected/${identityId}/`,
            (identityId: string) => `private/${identityId}/`,
          ]
      },
    }),
} // `createStorageBrowser` input values
const { StorageBrowser, useControl } = createStorageBrowser(input);

function MyStorageBrowser() {
  const [{ selected }] = useControl('LOCATION_ACTIONS');

  return (
    <Flex>
      <Flex direction={'row'}>
        <StorageBrowser.LocationsView />
        <StorageBrowser.LocationDetailView />
      </Flex>
      {selected.type ? (
        <dialog open>
          <StorageBrowser.LocationActionView />
        </dialog>
      ) : null}
    </Flex>
  );
}

export default function CustomStorageBrowser() {
  return (
    <StorageBrowser.Provider>
      <MyStorageBrowser />
    </StorageBrowser.Provider>
  )
}