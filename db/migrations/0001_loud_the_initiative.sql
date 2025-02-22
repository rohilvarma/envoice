CREATE TABLE "clients" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"official_name" varchar(100) NOT NULL,
	"display_name" varchar(100) NOT NULL
);
