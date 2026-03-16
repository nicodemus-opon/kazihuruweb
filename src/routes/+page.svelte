<script lang="ts">
	import { Search, Button, Select, Card, Label, PaginationNav } from 'flowbite-svelte';
	import lodash from 'lodash';

	let clearableSelected = $state('');
	import { ArrowRightOutline, CartSolid, FilterSolid } from 'flowbite-svelte-icons';
	const { data } = $props();
	let job_array = data.jobs;

	let raw_agencies = data.agencies;
	let currentPage = $state(1);
	let searchQuery = $state('');

	let jobChunks = lodash.chunk(job_array, 10);
	let totalPages = $state(jobChunks.length);
	let jobs = $state(jobChunks[0]);

	let agencies = raw_agencies.map((agency) => ({
		value: agency.agencyId,
		name: agency.agency
	}));

	function handlePageChange(page: number) {
		currentPage = page;

		// Additional logic here
		console.log('Page changed to:', page);
	}

	$effect(() => {
		if (searchQuery.trim() === '') {
			jobChunks = lodash.chunk(job_array, 10);
			jobs = jobChunks[currentPage - 1] || [];
			totalPages = jobChunks.length;
		} else {
			const filteredJobs = job_array.filter((job) =>
				job.vacancy.toLowerCase().includes(searchQuery.toLowerCase())
			);
			jobChunks = lodash.chunk(filteredJobs, 10);
			jobs = jobChunks[currentPage - 1] || [];
			totalPages = jobChunks.length;
		}
		if (currentPage > totalPages) {
			currentPage = 1; // Reset to the first page if the current page exceeds total pages
		}
	});
</script>

<div
	class=" mx-auto bg-gray-200 py-1 bg-blend-overlay dark:bg-gray-700"
	style=" background-size: cover; background-position: center;"
>
	<!-- HEADER -->
	<header class="border-b border-gray-200 dark:border-gray-700">
		<div class="mx-auto mt-40 mb-12 grid max-w-7xl gap-6 px-6 md:grid-cols-2">
			<div>
				<h1 class="text-5xl font-extrabold tracking-tight lg:text-7xl">Government Jobs in Kenya</h1>
				<p class="mt-2 pb-10 text-lg text-gray-600 dark:text-gray-400">
					Latest public service and government vacancies in Kenya
				</p>
			</div>
		</div>
	</header>
</div>
<div class="container mx-auto">
	<!-- JOB LIST -->
	<main class="mx-auto px-6 py-12">
		<div class="grid grid-cols-12 grid-rows-1 gap-4">
			<div class="col-span-12 col-start-1 md:col-span-6">
				<Search
					bind:value={searchQuery}
					placeholder="Search for jobs..."
					id="search"
					clearable
					clearableOnClick={() => {
						searchQuery = '';
					}}
				></Search>
			</div>
			<!--	
			<div class="col-span-12 col-start-1 md:col-span-3 md:col-start-7">
				<Select
					placeholder="Select an agency..."
					size="lg"
					class=""
					items={agencies}
					bind:value={clearableSelected}
					clearable
				/>
			</div>
			
			<div class="col-span-12 col-start-1 md:col-span-3 md:col-start-10">
				<Button size="lg" class="w-full">
					Filter <FilterSolid class="ms-2 h-5 w-5" />
				</Button>
			</div>
		-->
		</div>
		<div id="jobs" class="grid pt-12 md:grid-cols-12 lg:grid-cols-12">
			<div class="col-span-12">
				{#each jobs as job}
					<Card
						shadow="none"
						class="mb-4 w-full max-w-full bg-gray-100 p-4 md:p-4 dark:bg-gray-800"
					>
						<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
							{job.vacancy}
						</h5>
						<p class="text-md leading-tight font-normal text-gray-700 dark:text-gray-400">
							{job.agency}
						</p>
						<div class="flex items-center justify-between pt-5">
							<span class=" font-bold text-gray-400 dark:text-gray-400"
								>Apply before: {new Date(job.deadline).toDateString()}</span
							>
							<Button href={job.applicationUrl} target="_blank">
								Apply <ArrowRightOutline class="ms-2 h-5 w-5" />
							</Button>
						</div>
					</Card>
				{/each}
			</div>
			<div class="col-span-12">
				<PaginationNav
					{currentPage}
					{totalPages}
					size="large"
					onPageChange={handlePageChange}
					classes={{
						active:
							'bg-primary-700 hover:bg-primary-700 dark:hover:bg-primary-600 dark:bg-primary-600 text-white dark:text-white border-primary-700 dark:border-primary-600'
					}}
				/>
			</div>
		</div>
	</main>
</div>
