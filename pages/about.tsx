import React from 'react'
import NextLink from 'next/link'

export default function Settings(props: any) {
	return (
		<section>
			<h1>Static settings page</h1>
      <NextLink href="/">Home</NextLink>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. 
				Pellentesque diam orci, sodales in blandit ut, placerat quis felis. 
				Vestibulum at sem massa, in tempus nisi. 
				Vivamus ut fermentum odio. Etiam porttitor faucibus volutpat. 
				Vivamus vitae mi ligula, non hendrerit urna. Suspendisse potenti. 
				Quisque eget massa a massa semper mollis.
			</div>
		</section>
	)
}
