CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"avatar_url" text,
	"provider" text NOT NULL,
	"provider_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
