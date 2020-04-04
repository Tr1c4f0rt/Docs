
// EN aquesta pàgina s'han de mostrar tots els capitols del doc 0

// Comps
import Layout from '../../../components/Layout';

function Doc({allBlogs}){

    console.log('all', allBlogs);

    return(<Layout>
        <div>Doc Zero</div>
    </Layout>)
}

Doc.getInitialProps = async function() {
	
	// get all blog data for list
	const posts = (context => {
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
			// Parse yaml metadata & markdownbody in document
			
			return {
				value,
				slug
			}
		})
		return data
	})(require.context('../../../content/docs/doc-zero/', true, /\.md$/))

	return {	

		allBlogs: posts
	}
}




export default Doc