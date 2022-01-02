<script context="module">
	export async function load({ session, page }) {
		let article = {};
		let previous = {};
		let next = {};

		let [response, err] = await runPromise(crawler(session).get(`/article/${page.params.url}`));
		if (err) {
			console.log('error when fetching transaksi data');
			return {
				status: 200,
				props: {
					article,
				},
			};
		}

		article = response.data.current;
		previous = response.data.previous_article;
		next = response.data.next_article;

		return {
			status: 200,
			props: {
				article,
				previous,
				next,
			},
		};
	}
</script>

<script>
	import crawler from '@api/crawler';

	import { runPromise } from '@helpers';

	export let article = {};
	export let previous = {};
	export let next = {};
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta property="description" content={article.summary} />
</svelte:head>

<section class="container mx-auto max-w-7xl">
	<div class="relative py-16 bg-white overflow-hidden">
		<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
			<div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
				<svg
					class="absolute top-12 left-full transform translate-x-32"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
				</svg>
				<svg
					class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="f210dbf6-a58d-4871-961e-36d5016a0f49"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
				</svg>
				<svg
					class="absolute bottom-12 left-full transform translate-x-32"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="d3eb07ae-5182-43e6-857d-35c643af9034"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
				</svg>
			</div>
		</div>
		<div class="relative px-4 sm:px-6 lg:px-8">
			<a href="https://bit.ly/daftarheroslotwiki">
				<img class="h-72 w-full object-cover" src="https://bh01static.s3.eu-west-3.amazonaws.com/promotions/promotion_5_75.jpg" alt="slot terbaik heroslot77" />
			</a>
			<div class="text-lg max-w-prose mx-auto">
				<h1>
					<span
						class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
						>{article.title}</span
					>
				</h1>
			</div>
			<div class="mt-6 prose text-gray-500 mx-auto">
				<figure>
					<img
						class="w-full rounded-lg"
						src={article.image}
						alt={article.image_alt}
						width="1310"
						height="873"
					/>
					<figcaption>{article.image_alt}</figcaption>
				</figure>
				<p>
					{article.content}
				</p>
			</div>
			<div class="mt-4 text-sm max-w-prose mx-auto">
				<a
					href="/article/{next.slug}"
					class="w-full bg-transparent hover:bg-green-400 text-green-500 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-full"
					>{'< '}{next.title}</a
				>
			</div>
			<div class="mt-4 text-sm max-w-prose mx-auto">
				<a
					href="/article/{previous.slug}"
					class="w-full bg-transparent hover:bg-green-400 text-green-500 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-full"
					>{previous.title}{' >'}</a
				>
			</div>
		</div>
	</div>
</section>
