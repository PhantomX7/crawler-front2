<script>
	export let meta = { total: 0 };
	export let limit = 21;
	export let url;
	export let query = {};

	let page = 1;
	$: {
		if (query.page) {
			page = query.page;
		}
		if (query.limit) {
			limit = query.limit;
		}
	}

	import { goto } from '$app/navigation';
	import { generatePaginationUrl } from '@helpers';
</script>

<div
	class="flex flex-col xs:flex-row
        items-center xs:justify-between"
>
	<div class="inline-flex mt-2 xs:mt-0">
		<button
			class="border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
			on:click={() => {
				if (page == 1) {
					return;
				}
				goto(generatePaginationUrl(url, parseInt(page) - 1, limit, { ...query }));
			}}
		>
			{'<'}
		</button>
		{#if page != 1}
			<button
				class="border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
				on:click={() => {
					if (page == 1) {
						return;
					}
					goto(generatePaginationUrl(url, parseInt(page) - 1, limit, { ...query }));
				}}
			>
				{parseInt(page) - 1}
			</button>
		{/if}
		<button
			class=" border-green-400 text-green-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium hover:text-gray-700 hover:border-gray-300"
		>
			{parseInt(page)}
		</button>
		{#if (page != Math.ceil(meta.total / limit)) & (meta.total != 0)}
			<button
				class="border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
				on:click={() => {
					if (page == Math.ceil(meta.total / limit)) {
						return;
					}
					goto(generatePaginationUrl(url, parseInt(page) + 1, limit, { ...query }));
				}}
			>
				{parseInt(page) + 1}
			</button>
		{/if}
		<button
			class="border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
			on:click={() => {
				if ((page == Math.ceil(meta.total / limit)) | (meta.total == 0)) {
					return;
				}
				goto(generatePaginationUrl(url, parseInt(page) + 1, limit, { ...query }));
			}}
		>
			{'>'}
		</button>
	</div>
</div>
