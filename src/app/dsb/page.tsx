"use client"
import outputs from "@/../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import DefaultStorageBrowser from "../components/DefaultStorageBrowser";

Amplify.configure(outputs);

export default function Home() {
    return (
        <DefaultStorageBrowser />
    );
}