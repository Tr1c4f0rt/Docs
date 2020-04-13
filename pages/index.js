// Awesome TinaCMS docs allowed me to do so: https://tinacms.org/docs/nextjs/inline-editing

import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import { useLocalJsonForm } from 'next-tinacms-json'


// Comps
import FooterNavBar from '../components/FooterNavBar';

const Inici = ({ jsonFile }) => {

  const [data] = useLocalJsonForm(jsonFile, {
    fields: [
      {
        name: 'intro',
        label: 'Pròleg',
        component: 'textarea',
      }
    ],
  });

 
   
  return (
    <div>
      <Head>
        <title>DOCS[Z]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container">
                  <ReactMarkdown className="title">{data.intro}</ReactMarkdown>
          </div>
        </div>
        <div className="hero-foot">
                    <FooterNavBar/>
                </div>
      </section>

     

    </div>
  )
}



// Getting data

Inici.getInitialProps = async function() {
  const indexData = await import(`../content/pages/Home.json`);  
  return {    
    jsonFile: {
      fileRelativePath: `/content/pages/Home.json`,
      data: indexData.default,
    },
  }
}

export default Inici
