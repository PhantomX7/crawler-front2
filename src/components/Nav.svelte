<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let openMenu = false;
</script>

<nav class="bg-white shadow fixed w-full z-10">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => {
						openMenu = !openMenu;
					}}
				>
					<span class="sr-only">Open main menu</span>
					<!--
						Icon when menu is closed.
			
						Heroicon name: outline/menu
			
						Menu open: "hidden", Menu closed: "block"
					-->
					<svg
						class="block h-6 w-6 {openMenu ? 'hidden' : 'block'}"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!--
						Icon when menu is open.
			
						Heroicon name: outline/x
			
						Menu open: "block", Menu closed: "hidden"
					-->
					<svg
						class="h-6 w-6 {openMenu ? 'block' : 'hidden'}"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div class="flex-1 flex ml-11 sm:items-stretch sm:justify-start sm:ml-0">
				<div class="flex-shrink-0 flex items-center text-2xl text-green-400">
					<a href="/">Indowikipedia</a>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					<a
						href="/"
						class="{$page.path == '/'
							? 'border-green-400 text-green-400'
							: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
					>
						Home
					</a>
					<a
						href="/about-us"
						class="{$page.path == '/about-us'
							? 'border-green-400 text-green-400'
							: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
					>
						Tentang Kita
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden {openMenu ? 'block' : 'hidden'}" id="mobile-menu">
		<div class="pt-2 pb-4 space-y-1">
			<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
			<a
				on:click={() => {
					openMenu = !openMenu;
				}}
				href="/"
				class="{$page.path == '/'
					? 'bg-green-50 border-green-400 text-green-700'
					: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Home</a
			>
			<a
				on:click={() => {
					openMenu = !openMenu;
				}}
				href="/about-us"
				class="{$page.path == '/about-us'
					? 'bg-green-50 border-green-400 text-green-700'
					: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Tentang Kita</a
			>
		</div>
	</div>
</nav>
