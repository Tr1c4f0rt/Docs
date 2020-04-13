// Got most of this at https://tinacms.org/blog/simple-markdown-blog-nextjs/

// En aquest DOC faig proves amb Markdown
import matter from 'gray-matter';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import glob from 'glob';
import { useLocalMarkdownForm } from 'next-tinacms-markdown';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';


// Comps
import Layout from '../../../components/Layout';

let localStorage;

if (typeof window !== "undefined") {

  localStorage = window.localStorage;

}



export default function Chapter(props) {

  const path = useRouter().asPath;
  const slug = path.split('/')[3];

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

  useEffect(() => {

    localStorage.setItem(slug, "llegit");

  }, [])

  return (
    <Layout>
      <Head>
      <title>{data.frontmatter.titol} - Document Primer</title>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>
      <div className="container">
        <section className="section">
          <div className="content is-medium">
            <h1>{data.frontmatter.titol}</h1>
            <ReactMarkdown source={data.markdownBody} />
          </div>
          <section className="level navegacio-capitols">
            <Link href={data.frontmatter.ant}>
              <a className="button is-small">Anterior</a>
            </Link>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text={`M'acabo de llegir el capítol "${data.frontmatter.titol}" de Document Primer #DOCS[Z]`} data-via="tr1c4f0rt" data-show-count="false">Comparteix-me a Twitter</a>
            <Link href={data.frontmatter.seg}>
              <a className="button  is-small">Següent</a>
            </Link>
          </section>
        </section>
      </div>
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
    fallback: false,
  }
}

