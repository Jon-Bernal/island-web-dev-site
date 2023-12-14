<script>
  import "../app.pcss";
  import '../globalStyles.css'
  import { AppShell } from '@skeletonlabs/skeleton';
	import "../components/nav.svelte"
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';

	afterNavigate((params: AfterNavigate) => {
			const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
			const elemPage = document.querySelector('#page');
			if (isNewPage && elemPage !== null) {
					elemPage.scrollTop = 0;
			}
	});
</script>



<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block">Sidebar</div>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>

<style>
 * {
	border: 1px solid red;
 } 
</style>