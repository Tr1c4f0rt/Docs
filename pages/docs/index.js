import Link from 'next/link'

// Comps
import FooterNavBar from '../../components/FooterNavBar';


function Docs() {

    return (     
            <div className="hero is-fullheight">               
                <div className="hero-body is-centered">
                    <div className="tile is-parent">
                        <article className="tile is-child notification card is-danger carta-doc">
                            <div className="card-content">
                                <p className="title">
                                    Document Zero
                            </p>
                                <p className="subtitle">
                                    Ben aviat disponible. Et recomano començar pel document primer.
                            </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <Link href="/docs/doc-zero/">
                                        <a className="button is-small is-static is-fullwidth">Llegir</a>
                                    </Link>
                                </p>
                            </footer>
                        </article>
                    </div>


                    <div className="tile is-parent">
                        <article className="tile is-child notification card is-warning carta-doc">
                            <div className="card-content">
                                <p className="title">
                                   Document Primer</p>
                                <p className="subtitle">
                                La Rosa, en Marcos i en Pep són tres joves que es veuen forçats a emprendre un viatge
                                    a través d'una terra despoblada a causa de la misèria i la malaltia. De valors i conviccions ben diferents,
                                    s'enfrontaran, cadascú per la seva banda, a decissions crucials per la seva vida i, qui sap, si per la dels 
                                    altres. Grans sacrificis i dilemes morals els esperen en aquesta terra sense llei i plena de perills.
                            </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <Link href="/docs/doc-primer/">
                                        <a className="button is-small is-fullwidth">Llegir</a>
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
                                    ...
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
                <div className="hero-foot">
                    <FooterNavBar/>
                </div>
            </div>      
   )




}


export default Docs