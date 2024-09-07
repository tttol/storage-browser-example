"use client"
import outputs from "@/../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { StorageBrowser } from "../components/StorageBrowser";

Amplify.configure(outputs);

export default function Home() {
    return (
        <StorageBrowser />
    );
}