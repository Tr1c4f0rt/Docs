import Link from 'next/link'

// Comps
import NavBar from '../../components/Layout';

function Docs() {

    return (     
            <div className="hero is-fullheight">
                <div className="hero-head">
                    <NavBar/>
                </div>
                <div className="hero-body is-centered">
                    <div className="tile is-parent">
                        <article className="tile is-child notification card is-warning carta-doc">
                            <div className="card-content">
                                <p className="title">
                                    Document Zero
                            </p>
                                <p className="subtitle">
                                    Publicant-se
                            </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <Link href="/docs/doc-zero/">
                                        <a className="button is-small is-fullwidth">Llegir</a>
                                    </Link>
                                </p>
                            </footer>
                        </article>
                    </div>


                    <div className="tile is-parent">
                        <article className="tile is-child notification card is-primary carta-doc">
                            <div className="card-content">
                                <p className="title">
                                    Document Primer
                            </p>
                                <p className="subtitle">
                                    Pendent de publicació
                            </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <Link href="/docs/doc-primer/">
                                        <a className="button is-small is-static is-fullwidth">Llegir</a>
                                    </Link>
                                </p>
                            </footer>
                        </article>
                    </div>

                    <div className="tile is-parent">
                        <article className="tile is-child notification card is-dark carta-doc">

                            <div className="card-content">
                                <p className="title">
                                    Document Segon
                            </p>
                                <p className="subtitle">
                                    En producció
                            </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <button className="button is-small is-static is-fullwidth">Llegir</button>
                                </p>
                            </footer>

                        </article>
                    </div>

                </div>
            </div>      
   )




}


export default Docs