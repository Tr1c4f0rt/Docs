import Link from 'next/link';
import {useState,useEffect} from 'react';
import {ultimCapitol} from '../../utils/MyGun';

function TileCapitol(props) {

    const { titol, slug } = props.capitol;   
    const url = `${props.path}/${slug}`;
    const [llegit,setLlegit] = useState("is-dark");

    useEffect(() => {
      
        ultimCapitol('get',url).then((res,err)=>{

            console.log(`res al component ${slug}`, res);

            if(err){
                console.error(err);
            }     
     
            if(res._.put==true){
                setLlegit('is-light');
            }

        });      

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