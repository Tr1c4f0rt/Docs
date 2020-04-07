// Awesome TinaCMS docs allowed me to do so: https://tinacms.org/docs/nextjs/inline-editing

import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import { useLocalJsonForm } from 'next-tinacms-json'


// Comps
import Layout from '../components/Layout';
import Brave from '../public/img/svg/brave.svg'

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
                <title>Com funciona?</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="hero is-light">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Com funciona?
                        </h1>     
                        <h1 className="subtitle">
                            Privadesa i altres qüestions
                        </h1>                               
                    </div>
                </div>

            </section>

            <div className="container content is-medium v-centered">

                <section className="container tot-aixo-container">                  
                    <ReactMarkdown>{data.intro}</ReactMarkdown>
                    <ReactMarkdown>{data.privadesa}</ReactMarkdown>
                    <ReactMarkdown>{data.navegador}</ReactMarkdown>


                    <a className="button pastilla-brave" href="https://brave.com/trc866" target="_blank"><Brave/></a>
                    <ReactMarkdown>{data.tancament}</ReactMarkdown>
                    <p></p>
                    <p>Atentament,</p>
                    <code>Tr1c4f0rt</code>
                </section>

             
            </div>

        </Layout>
    )
}



// Getting data

Inici.getInitialProps = async function () {
    const indexData = await import(`../content/pages/Funcionament.json`);
    return {
        jsonFile: {
            fileRelativePath: `/content/pages/Funcionament.json`,
            data: indexData.default,
        },
    }
}

export default Inici
