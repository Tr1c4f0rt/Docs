// Awesome TinaCMS docs allowed me to do so: https://tinacms.org/docs/nextjs/inline-editing

import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import { useLocalJsonForm } from 'next-tinacms-json'


// Comps
import FooterNavBar from '../components/FooterNavBar';
//import Brave from '/svg/brave.svg';

const Funcionament = ({ jsonFile }) => {

    const [data] = useLocalJsonForm(jsonFile, {
        label: 'Funcionament',
        fields: [
            {
                name: 'intro',
                label: 'Introducció',
                component: 'textarea',
            },
            {
                name: 'privadesa',
                label: 'Privadesa',
                component: 'textarea',
            },
            {
                name: 'navegador',
                label: 'Navegador',
                component: 'textarea',
            },
            {
                name: 'tancament',
                label: 'Tancament',
                component: 'textarea',
            }
        ],
    });


    return (
        <div className="hero is-fullheight">
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

            <div className="hero-body content is-medium v-centered">

                <section className="container tot-aixo-container">
                    <div className="container">
                    <ReactMarkdown>{data.intro}</ReactMarkdown>
                    <ReactMarkdown>{data.privadesa}</ReactMarkdown>
                    <ReactMarkdown>{data.navegador}</ReactMarkdown>


                    <a className="button pastilla-brave" href="https://brave.com/trc866" target="_blank"></a>
                    <ReactMarkdown>{data.tancament}</ReactMarkdown>  
                    <p></p>
                    <p>Atentament,</p>
                    <code>Tr1c4f0rt</code>
                    </div>
                </section>


            </div>
            <div className="hero-foot">
                <FooterNavBar />
            </div>
        </div>
    )
}



// Getting data

Funcionament.getInitialProps = async function () {
    const indexData = await import(`../content/pages/Funcionament.json`);
    return {
        jsonFile: {
            fileRelativePath: `/content/pages/Funcionament.json`,
            data: indexData.default,
        },
    }
}

export default Funcionament
