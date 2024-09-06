"use client";
import outputs from '@/../amplify_outputs.json';
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import Storage from "./Storage";


Amplify.configure(outputs)

export default function App() {
  return (
    <>
      <Authenticator>
        {() => (
          <>
            <h1 className="text-3xl font-bold">
              Storage Browser for Amazon S3 Example
            </h1>
            <Storage />
          </>
        )}
      </Authenticator>
    </>
  );
}
