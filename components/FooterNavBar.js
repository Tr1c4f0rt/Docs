import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function FooterNavBar() {

    // Setting the is-active property to the propper node
    const [isActive, setActive] = useState({
        home: "",
        docs: "",
        priv: "",
        aixo: ""
    })

    const { home, docs, priv } = isActive;
    const { pathname } = useRouter();

    useEffect(() => {

        switch (pathname) {
            case "/":
                setActive({
                    home: "is-active",
                    docs: "",
                    priv: "",
                    aixo: ""
                })
                break;
            case "/docs":
                setActive({
                    home: "",
                    docs: "is-active",
                    priv: "",
                    aixo: ""
                })
                break;
            case "/funcionament":
                setActive({
                    home: "",
                    docs: "",
                    priv: "is-active",
                    aixo: ""
                })
                break;
            case "/aixo":
                setActive({
                    home: "",
                    docs: "",
                    priv: "",
                    aixo: "is-active"
                })
                break;
            default:
                setActive({
                    home: "",
                    docs: "",
                    priv: "",
                    aixo: ""
                })
                break;
        }

    }, []); // Using ,[] to call it once.


    return (<nav className="tabs is-boxed is-fullwidth">
        <div className="container">
            <ul>
                <li className={home}>
                    <Link href="/">
                        <a><b>DOCS</b></a>
                    </Link>
                </li>
                <li className={docs}>
                    <Link href="/docs">
                        <a>Inici</a>
                    </Link>
                </li>

                <li className={priv}><Link href="/funcionament">
                    <a>Privadesa</a>
                </Link>
                </li>

                <li><Link href="/aixo">
                    <a>Sobre tot això</a>
                </Link>
                </li>
            </ul>
        </div>
    </nav>)

}




export default FooterNavBar;