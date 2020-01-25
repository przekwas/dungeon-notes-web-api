export interface TUsers {
	id: number;
	username: string;
	hash: string;
	role: string;
	created_at: Date;
}

export interface TTokens {
	id: number;
	user_id: number;
	uniq: string;
	val: string;
	created_at: Date;
	expires_at: Date;
}

export interface TCampaigns {
	id: number;
	name: string;
	created_at: Date;
}

export interface TCharacters {
	id: number;
	user_id: number;
	campaign_id: number;
	name: string;
	title: string;
	notes: string;
	created_at: Date;
}

export interface TEvents {
	id: number;
	user_id: number;
	campaign_id: number;
	name: string;
	location: string;
	notes: string;
	created_at: Date;
}

export interface TPersonal {
	id: number;
	user_id: number;
	campaign_id: number;
	title: string;
	location: string;
	notes: string;
	created_at: Date;
}

export interface TPlaces {
	id: number;
	user_id: number;
	campaign_id: number;
	name: string;
	location: string;
	notes: string;
	created_at: Date;
}
