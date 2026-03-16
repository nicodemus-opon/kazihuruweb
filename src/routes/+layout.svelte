<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		ImagePlaceholder,
		Skeleton,
		TextPlaceholder
	} from 'flowbite-svelte';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';

	import { DarkMode } from 'flowbite-svelte';

	let { children } = $props();

	onMount(() => {
		// Add a scroll listener to toggle classes based on scroll position
		window.addEventListener('scroll', () => {
			const navbar = document.getElementById('nav');
			if (window.scrollY > 0) {
				navbar.classList.add('dark:bg-white', 'shadow-md');
			} else {
				navbar.classList.remove('bg-white', 'shadow-md');
			}
		});
	});
</script>

<svelte:head><link rel="icon" href="logo.png" /></svelte:head>
<title>Kazihuru - Government Jobs in Kenya</title>
<meta name="description" content="Latest public service and government vacancies in Kenya" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div class="relative h-screen w-screen">
	<Navbar
		id="nav"
		class="fixed start-0 top-0 z-20 w-full  border-gray-200 py-2 backdrop-blur-lg md:py-0 dark:border-gray-700 "
	>
		<NavBrand href="/">
			<img src="/logo.png" class="me-3 h-6 rounded-full sm:h-9" alt="Flowbite Logo" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>Kazihuru</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			

			<DarkMode />
		</NavUl>
	</Navbar>
	<div
		style="height:100vh;"
		class="overflow-scroll bg-white text-gray-700 dark:bg-gray-950 dark:text-gray-300 "
	>
		{@render children()}
		<Footer class="mt-10 py-5">
		<FooterCopyright href="/" by="Kazihuru" year={2026} />
		<FooterLinkGroup
			class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
		>
			<FooterLink href="mailto:nico@kazihuru.org">email: nico@kazihuru.org</FooterLink>
			
		</FooterLinkGroup>
	</Footer>
	</div>
	
</div>
