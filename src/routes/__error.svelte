<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	export let title;
	console.log(title)

	if (browser) {
		goto('/');
	}
</script>

<div>ERROR</div>
