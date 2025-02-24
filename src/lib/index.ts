import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import PocketBase, { type BaseAuthStore, type RecordModel } from "pocketbase";
import type { TypedPocketBase } from "./pocketbase-types";
import type { AuthRecord } from "./types";

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL) as TypedPocketBase & {
	authStore: BaseAuthStore & {
		record: AuthRecord;
	};
};
