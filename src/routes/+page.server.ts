import { db } from '$lib/server/db';
import { stagingVacancy, advert } from '$lib/server/db/schema';
import { asc, desc, like, gte } from 'drizzle-orm';
import type { Actions } from './$types';

export const actions = {
	search: async (event) => {
		// TODO log the user in
	},
	register: async (event) => {
		// TODO register the user
	}
} satisfies Actions;
// @ts-ignore
export const load = async () => {
	const jobs = await db
		.select()
		.from(stagingVacancy)
		.where(gte(stagingVacancy.deadline, new Date().toISOString().split('T')[0]))
		.orderBy(desc(stagingVacancy.deadline));

	const agencies = await db
		.selectDistinct({ agency: advert.agency, agencyId: advert.agencyId })
		.from(advert)
		.orderBy(asc(advert.agency));
	const searchjobs = (query: string) => {
		// Use the 'like' operator for partial matches in SQL
		return db
			.select()
			.from(stagingVacancy)
			.where(like(stagingVacancy.vacancy, `%${query}%`))
			.orderBy(desc(stagingVacancy.deadline))
			.limit(10);
	};

	return {
		jobs: jobs,
		agencies: agencies
	};
};
