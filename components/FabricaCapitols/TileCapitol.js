import Link from 'next/link';
import {useState,useEffect, useContext} from 'react';

import {gunContext} from '../../pages/_app';

function TileCapitol(props) {

    const [llegit,setLlegit] = useState("is-dark");
  
    //Gun
    const {gun,nomGraph} = useContext(gunContext);    
    const { titol, slug } = props.capitol;   
    const url = `${props.path}/${slug}`;
    const doc = props.path.split('/')[2];   
    const docKey = doc.split('-')[1];    
    
    useEffect(() => {
      
        gun.get(nomGraph).get(docKey).get(slug).get("llegit").once((res) => {

            console.log(`resposta del get ${slug}`, res);

            if(res===true){
                setLlegit("is-light");
            }           

        },{wait: 0})   

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