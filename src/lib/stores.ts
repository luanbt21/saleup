import { writable } from "svelte/store";
import type { AuthRecord } from "./types";

export const user = writable<AuthRecord | null>(null);
