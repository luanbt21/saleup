import type { RecordModel } from "pocketbase";

export type AuthRecord =
	| (RecordModel & {
			avatar: string;
			created: Date;
			email: string;
			emailVisibility: boolean;
			name: string;
			updated: Date;
			verified: boolean;
	  })
	| null;
