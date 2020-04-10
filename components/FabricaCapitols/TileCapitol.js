import Link from 'next/link';
import {useState,useEffect, useContext} from 'react';


let localStorage;

if(typeof window !== "undefined"){

  localStorage = window.localStorage;

}


function TileCapitol(props) {

    const { titol, slug } = props.capitol;   
    const url = `${props.path}/${slug}`;
    const [llegit,setLlegit] = useState("is-dark");
 

    useEffect(() => {
      
        const capitol = localStorage.getItem(slug);
        
        if(capitol === "llegit"){
            setLlegit('is-light');
        }

    }, [])

    return (
  
    <div className="column is-one-quarter">

        <div className="card carta-capitol">
            <div className="card-content">
                <p className="title">
                {titol}
                </p>        
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                
                    <Link href={url}>
                    <a className={`button ${llegit} is-fullwidth`}>{llegit==="is-dark"?"Llegir":"Tornar a llegir"}</a>
                    </Link>               
                </p>
                
            </footer>
        </div>
      
    </div>)
}

export default TileCapitol;