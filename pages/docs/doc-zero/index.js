
// EN aquesta pàgina s'han de mostrar tots els capitols del doc 0
import Head from 'next/head';
import matter from 'gray-matter'

// Comps
import Layout from '../../../components/Layout';
import FabricaCapitols from '../../../components/FabricaCapitols/';

function Doc({capitols}){

    return(<Layout>
		<Head>
				<title>Document Zero</title>
                <link rel="icon" href="/favicon.ico" />
		</Head>
        	 <section className="hero is-light">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Document Zero
                        </h1>      
						<h2 className="subtitle">
							Una mica de context</h2>                  
                    </div>
                </div>

            </section>
			<section className="container llista-capitols">
				<FabricaCapitols capitols={capitols}/>
			</section>

    </Layout>)
}

Doc.getInitialProps = async function() {
	
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
	})(require.context('../../../content/docs/doc-zero/', true, /\.md$/))

	return {	

		capitols
	}
}




export default Doc


