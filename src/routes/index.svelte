<script context="module">
	export async function load({ session, page }) {
		try {
			let articles = { data: [], meta: {} };

			let [response, err] = await runPromise(
				crawler(session).get(
					generateIndexUrl(`/article`, queryString.parse(page.query.toString())),
				),
			);
			if (err) {
				console.log('error when fetching transaksi data');
				return {
					status: 200,
					props: {
						article,
					},
				};
			}

			articles = response.data;

			return {
				status: 200,
				props: {
					articles,
				},
			};
		} catch (e) {
			console.log(e);
		}
	}
</script>

<script>
	import { page } from '$app/stores';
	import queryString from 'query-string';
	import moment from 'moment';
	import crawler from '@api/crawler';

	import Pagination from '@components/Pagination.svelte';

	import { runPromise, generateIndexUrl } from '@helpers';

	export let articles = { data: [], meta: {} };
</script>

<svelte:head>
	<title>Littleblogger | Pusat artikel terpopuler di Indonesia</title>
	<meta property="description" content="kumpulan berita paling menarik seputar indonesia yang hot dan terpopuler" />
</svelte:head>

<!--Hero-->
<div class="p-5 h-full">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
		<div class="flex-shrink-0">
		</div>
		
		<div class="absolute inset-0">
			<div class="bg-white h-1/3 sm:h-2/3" />
		</div>
		<div class="relative max-w-7xl mx-auto">
			<a href="https://bit.ly/daftarheroslotwiki">
				<img class="h-72 w-full object-cover" src="https://bh01static.s3.eu-west-3.amazonaws.com/promotions/promotion_5_75.jpg" alt="slot terbaik heroslot77" />
			</a>

			<div class="text-center">
				<h2 class="text-3xl mt-2 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
					Artikel Terkini
				</h2>
				<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
					Artikel terkini dan terbaru seputar Indonesia
				</p>
			</div>
			<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
				{#each articles.data as article}
					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<img class="h-48 w-full object-cover" src={article.image} alt={article.image_alt} />
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<p class="text-sm font-medium text-indigo-600">
									<span class="hover:underline"> Article </span>
								</p>
								<a href="/article/{article.slug}" class="block mt-2">
									<p class="text-xl font-semibold text-gray-900">{article.title}</p>
									<p class="mt-3 text-base text-gray-500">
										{article.content.substring(0, 180)}...
									</p>
								</a>
							</div>
							<div class="mt-6 flex items-center">
								<div class="">
									<div class="flex space-x-1 text-sm text-gray-500">
										<time datetime={moment(article.created_at).format('YYYY-MM-DD')}>
											{moment(article.created_at).format('LL')}
										</time>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="mt-2">
				<Pagination meta={articles.meta} query={queryString.parse($page.query.toString())} url="" />
			</div>
		</div>
	</div>
</div>
