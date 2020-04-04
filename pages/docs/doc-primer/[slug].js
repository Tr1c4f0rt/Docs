// Got most of this at https://tinacms.org/blog/simple-markdown-blog-nextjs/

// En aquest DOC faig proves amb Markdown
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import glob from 'glob';
import { useLocalMarkdownForm } from 'next-tinacms-markdown'

// Comps
import Layout from '../../../components/Layout';

export default function Chapter(props) {
  
  const formOptions = {
    label: 'Capítol',
    fields: [
      { label: 'Titol', name: 'frontmatter.titol', component: 'text' },
      {
        name: 'markdownBody',
        label: 'Contingut',
        component: 'markdown',
      },
    ],
  }

  const [data] = useLocalMarkdownForm(props, formOptions)

  return (
    <Layout>   
       <section className="section">
        <div className="content is-medium">
          <h1>{data.frontmatter.titol}</h1>         
          <ReactMarkdown source={data.markdownBody} />
        </div>   
      </section>
    </Layout>
  )
}


export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../../content/docs/doc-primer/${slug}.md`);  
  const data = matter(content.default)

  return {
    props: {      
      fileRelativePath: `content/docs/doc-primer/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {

  //get all .md files in the posts dir
  const capitols = await glob.sync('content/docs/doc-primer/**/*.md')

  //remove path and extension to leave filename only
  const slugs = capitols.map(file =>
    file
      .split('/')[3]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = slugs.map(slug => `/docs/doc-primer/${slug}`)

  return {
    paths,
    fallback: true,
  }
}
