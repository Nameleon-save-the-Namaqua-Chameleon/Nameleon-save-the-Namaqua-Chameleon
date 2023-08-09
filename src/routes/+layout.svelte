<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../theme.postcss'
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';

    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/navbar.svelte';
	import {page} from '$app/stores';

	let innerWidth = 0;
	let innerHeight = 0;
	$: small_layout = innerWidth < 640;

	let nav_elements = [
        {'label': 'Home', 'path': '/'},
        {'label': 'Mission Statement', 'path': '/mission'},
        {'label': 'Vision Statement', 'path': '/vision'},
        {'label': 'Values Statement', 'path': '/values'},
    ];

	const drawerSettings: DrawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	bgDrawer: 'bg-primary-900 text-white',
	bgBackdrop: 'bg-gradient-to-tr from-primary-500/50 via-secondary-500/50 to-tertiary-500/50',
	width: 'w-[280px] md:w-[480px]',
	rounded: 'rounded-xl',
	};

	$: current_page = $page.url.pathname;
	$: current = "";

	$: if (undefined != current_page){
		nav_elements.forEach(element => {
			if (element["path"] == current_page) {
				current = element["label"];
			}
		});

		// always crop the '/'-prefix
		if (current_page.length >= 1) {
			current_page = current_page.slice(1, $page.url.pathname.length)
		}

		// index-page
		if (current_page.length <= 0) {
			current_page = "Home";
		}
		// any other page
		else {
			current_page = current_page.slice(0,1).toUpperCase() +
						   current_page.slice(1,current_page.length);
		}
	}

	function menuButton_onClick() {
		drawerStore.open(drawerSettings)
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />


<AppShell slotHeader="z-40">
	<!-- HEADER -->
	<svelte:fragment slot="header">
		<!--Draw different NavBar styles depending on screensize-->
		<!--Small layout-->
		{#if small_layout}
			<!--Navbar replacement with menubutton-->
			<div class="z-40 bg-primary-900 grow w-full overflow-hidden bg-opacity-60 h-12">
				<div class="grow-0 float-left pt-2 pl-1">
						<button class="btn btn-sm bg-primary-500" on:click={menuButton_onClick}>
							<!-- <img src="src/docs/images/menu_icon.svg" alt="..." height=50px width=50px />
							<svg  height=50px width=50px xmlns="src/docs/images/menu_icon.svg">
								<use xlink:href="src/docs/images/menu_icon.svg"></use>
							</svg> -->
							<div class="space-y-2">
								<div class="w-7 h-0.5 bg-secondary-500"></div>
								<div class="w-7 h-0.5 bg-secondary-500"></div>
								<div class="w-7 h-0.5 bg-secondary-500"></div>
							</div>
						</button>
				</div>
			</div>

			<!--Actual navbar-->
			<Drawer position="top" height="h-50">
				<Navbar current={current} verticality={false} nav_elements={nav_elements}/>
			</Drawer>

		<!--Big Layout-->
		{:else}
			<Navbar current={current} verticality={true} nav_elements={nav_elements}/>
		{/if}
	</svelte:fragment>


	<!--SIDEBAR LEFT-->
	<!-- <svelte:fragment slot="sidebarLeft">
		<div class="w-full h-full flex bg-violet-700 justify-center items-center">
			
			<h1 class="text-xl">
				Test SideBar Left
			</h1>

		</div>
	</svelte:fragment> -->

	<!--SIDEBAR RIGHT-->
	<!-- <svelte:fragment slot="sidebarRight">
		<div class="w-full h-full flex bg-violet-700 justify-center items-center">
			
			<h1 class="text-xl">
				Test SideBar Right
			</h1>

		</div>
	</svelte:fragment> -->

	<!-- <svelte:fragment slot="pageHeader">
		<div class="w-full h-full flex bg-green-700 justify-center items-center">
			
			<h1 class="text-xl">
				Test PageHeader
			</h1>

		</div>
	</svelte:fragment> -->

	<!-- CONTENT -->
	<slot />
	<!-- ---- / ---- -->

	<!-- PAGEFOOTER -->
	<!-- <svelte:fragment slot="pageFooter">
		<div class="w-full h-full flex bg-blue-500 justify-center">
			
			<h1 class="text-xl">
				Test Page Footer
			</h1>

		</div>
	</svelte:fragment> -->

	<!-- FOOTER -->
	<!-- <svelte:fragment slot="footer">
		<div class="w-full h-full flex bg-yellow-400 justify-center">
			
			<h1 class="text-xl">
				Test Footer
			</h1>

		</div>
	</svelte:fragment> -->

    <!-- PLACEHOLDER -->
    <div class="h-16">
    
    </div>


</AppShell>

