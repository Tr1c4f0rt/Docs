// Awesome TinaCMS docs allowed me to do so: https://tinacms.org/docs/nextjs/inline-editing

import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import { useLocalJsonForm } from 'next-tinacms-json'


// Comps
import Layout from '../components/Layout';

const Inici = ({ jsonFile }) => {

    const [data] = useLocalJsonForm(jsonFile, {
        fields: [
            {
                name: 'ficcio',
                label: 'És ficció',
                component: 'textarea',
            },
            {
                name: 'lluny',
                label: 'Ve de Lluny',
                component: 'textarea',
            },
            {
                name: 'aficio',
                label: 'Ës una afició',
                component: 'textarea',
            }
        ],
    });



    return (
        <Layout>
            <Head>
                <title>Tot això...</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="hero is-light">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Tot això...
                        </h1>                        
                    </div>
                </div>

            </section>

            <div className="container content is-medium v-centered">

                <section className="container tot-aixo-container">
                    <h2 className="is-title">És ficció</h2>
                    <ReactMarkdown>{data.ficcio}</ReactMarkdown>
                </section>

                <section className="container tot-aixo-container">
                    <h2 className="is-title">Ve de lluny</h2>
                    <ReactMarkdown>{data.lluny}</ReactMarkdown>
                </section>

                <section className="container tot-aixo-container">
                    <h2 className="is-title">És una afició</h2>
                    <ReactMarkdown>{data.aficio}</ReactMarkdown>
                </section>
            </div>

        </Layout>
    )
}



// Getting data

Inici.getInitialProps = async function () {
    const indexData = await import(`../content/pages/Aixo.json`);
    return {
        jsonFile: {
            fileRelativePath: `/content/pages/Aixo.json`,
            data: indexData.default,
        },
    }
}

export default Inici
