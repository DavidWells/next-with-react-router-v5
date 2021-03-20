import React from 'react'

export default function SSROnly(props: any) {
	const data = props || {}
	return (
		<section>
			<h1>Using file-system route and getServerSideProps</h1>
			<pre>
				<code>{JSON.stringify(data, null, 2)}</code>
			</pre>
		</section>
	)
}

export async function getServerSideProps() {
	return {
		props: { fromServer: new Date().toTimeString() },
	}
}
