import { pgTable, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const stagingVacancy = pgTable("staging_vacancy", {
	vacancy: text(),
	vacancyId: text("vacancy_id"),
	title: text(),
	advert: text(),
	agency: text(),
	rawDeadline: text("raw_deadline"),
	id: text(),
	agencyId: text("agency_id"),
	deadline: text(),
	applicationUrl: text("application_url"),
});

export const advert = pgTable("advert", {
	title: text(),
	advert: text(),
	agency: text(),
	rawDeadline: text("raw_deadline"),
	id: text(),
	agencyId: text("agency_id"),
	deadline: text(),
});

export const vacancy = pgTable("vacancy", {
	vacancy: text(),
	linkId: text("link_id"),
	vacancyId: text("vacancy_id"),
});

export const applicationLink = pgTable("application_link", {
	url: text(),
	linkId: text("link_id"),
	urlId: text("url_id"),
});

export const rawJobVacancy = pgTable("raw_job_vacancy", {
	rawText: text("raw_text"),
	linkId: text("link_id"),
});

export const link = pgTable("link", {
	link: text(),
	id: text(),
	linkText: text("link_text"),
	createdAt: text("created_at"),
});
