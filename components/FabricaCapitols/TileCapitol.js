import Link from 'next/link';

function TileCapitol(props) {

    const { titol, slug } = props.capitol;
    const url = `${props.path}/${slug}`;

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
                    <a className="button is-dark is-fullwidth" >Llegir</a>
                    </Link>               
                </p>
                
            </footer>
        </div>
      
    </div>)
}

export default TileCapitol;