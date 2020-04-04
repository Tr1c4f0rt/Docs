import Link from 'next/link'

// Comps
import Layout from '../../components/Layout';

function Docs() {



    return (<Layout>
        <div className="tile is-ancestor">

           

                <div className="tile is-parent">
                    <article className="tile is-child notification box is-primary">
                        <p className="title">Document Zero</p>
                        <p className="subtitle">Top tile</p>
                        <Link href="/docs/doc-zero/">
                        Zero
                        </Link>
                    </article>
                </div>

           
                <div className="tile is-parent">
                    <article className="tile is-child notification box is-warning">
                        <p className="title">Document Primer</p>
                        <p className="subtitle">Bottom tile</p>
                        <Link href="/docs/doc-primer/">
                            Primer
                            </Link>
                    </article>
                </div>
          
        </div>

    </Layout>)




}


export default Docs