import { useState, useEffect } from 'react';
import Link from 'next/link';

function NavBar(props) {

    const {isHome} = props; // The navbar has a slightly different behavior on the homepage
    const [isActive, setActive] = useState("");
    const [isFixed, setFixed] = useState("");
    const [isDropUp, setDropUp] = useState("");
    const [titol,setTitol] = useState("DOCS");

    useEffect(()=>{

        //Dropdown Direction
        if(isHome){        
            setDropUp("has-dropdown-up");
            setTitol("DOCS");
        }

    })

    // Burger Menu
    const handleActivation = () => {

        if (isActive === "") {

            setActive("is-active");            

            if (isHome) {                
                setFixed("is-fixed-bottom");
            }

        } else {

            setActive("");

            if (isHome !== "undefined") {
                 setFixed("");
            }
        }

    }

    return( <nav className={`navbar ${isFixed}`} role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link href="/">        
        <a className="navbar-item">
        <b>{titol}</b>
        </a>
      </Link>
      <a role="button" onClick={handleActivation} className={`navbar-burger burger ${isActive}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className={`navbar-menu ${isActive}`}>
      <div className="navbar-start">
          <Link href="/docs">        
            <a className="navbar-item">
               Inici
            </a>
          </Link>        

        <Link href="/doczero/">
            <a className="navbar-item">            
                Últim Publicat            
            </a>
        </Link>   

        <div className={`navbar-item has-dropdown ${isDropUp} is-hoverable`}>
          <a className="navbar-link">
            Més
    </a>
          <div className="navbar-dropdown">
          <Link href="/docs">
            <a className="navbar-item">
              Capítol 1
            </a>
         </Link>     
            <Link href="/aixo">
                <a className="navbar-item">
                Tot això
                </a>
            </Link>        

      
      <a className="navbar-item">
              Funcionament
      </a>      
            <a className="navbar-item">
              Contacte
      </a>
          </div>
        </div>
      </div>

    </div>
  </nav>)

}

export default NavBar;