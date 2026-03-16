-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "staging_vacancy" (
	"vacancy" text,
	"vacancy_id" text,
	"title" text,
	"advert" text,
	"agency" text,
	"raw_deadline" text,
	"id" text,
	"agency_id" text,
	"deadline" text,
	"application_url" text
);
--> statement-breakpoint
CREATE TABLE "advert" (
	"title" text,
	"advert" text,
	"agency" text,
	"raw_deadline" text,
	"id" text,
	"agency_id" text,
	"deadline" text
);
--> statement-breakpoint
CREATE TABLE "vacancy" (
	"vacancy" text,
	"link_id" text,
	"vacancy_id" text
);
--> statement-breakpoint
CREATE TABLE "application_link" (
	"url" text,
	"link_id" text,
	"url_id" text
);
--> statement-breakpoint
CREATE TABLE "raw_job_vacancy" (
	"raw_text" text,
	"link_id" text
);
--> statement-breakpoint
CREATE TABLE "link" (
	"link" text,
	"id" text,
	"link_text" text,
	"created_at" text
);

*/