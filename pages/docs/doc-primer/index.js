
// EN aquesta pàgina s'han de mostrar tots els capitols del doc 0
import Head from 'next/head';
import matter from 'gray-matter'
import { useContext } from 'react';


// Comps
import Layout from '../../../components/Layout';
import FabricaCapitols from '../../../components/FabricaCapitols/';


function Doc(props) {
	
	const { capitols } = props;

	return (<Layout>
		<Head>
			<title>Document Primer</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:url" content="https://docs-z.now.sh/docs/doc-primer/" />
			<meta name="twitter:title" content="DOCS[z] Xarxes d'amor" />
			<meta name="twitter:description" content="Narrativa de ficció en català." />
			<meta name="twitter:image" content="/img/docsz.png" />
		</Head>
		<section className="hero is-light">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">
						Document Primer
                        </h1>
					<h2 className="subtitle">
						<code>// DOCS[1]</code></h2>
				</div>
			</div>

		</section>
		<section className="container llista-capitols">
			<FabricaCapitols capitols={capitols} />
		</section>

	</Layout>)
}



Doc.getInitialProps = async function () {

	// get all blog data for list
	const capitols = (context => {
		const keys = context.keys()
		const values = keys.map(context)
		const data = keys.map((key, index) => {
			// Create slug from filename
			const slug = key
				.replace(/^.*[\\\/]/, '')
				.split('.')
				.slice(0, -1)
				.join('.')
			const value = values[index]
			const parsejat = matter(value.default)
			const titol = parsejat.data.titol;

			return {
				titol,
				slug
			}
		})
		return data
	})(require.context('../../../content/docs/doc-primer/', true, /\.md$/))

	return {

		capitols
	}
}




export default Doc


