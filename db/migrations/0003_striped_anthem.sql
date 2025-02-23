CREATE TABLE "client_status" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL,
	"desciption" varchar(100),
	CONSTRAINT "client_status_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "payment_status" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL,
	"desciption" varchar(100),
	CONSTRAINT "payment_status_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "company_name" varchar(150) NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "email" varchar(50);--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "phone" varchar(15);--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "gst_no" varchar(15) NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "website" varchar(50);--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "address" varchar(150) NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "city" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "state" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "zip_code" varchar(6) NOT NULL;--> statement-breakpoint
ALTER TABLE "clients" DROP COLUMN "official_name";--> statement-breakpoint
ALTER TABLE "clients" DROP COLUMN "display_name";--> statement-breakpoint
ALTER TABLE "clients" ADD CONSTRAINT "clients_gst_no_unique" UNIQUE("gst_no");--> statement-breakpoint
ALTER TABLE "clients" ADD CONSTRAINT "clients_website_unique" UNIQUE("website");