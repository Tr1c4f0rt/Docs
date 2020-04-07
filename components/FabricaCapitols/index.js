import {useRouter} from 'next/router';
import TileCapitol from './TileCapitol';

function FabricaCapitols(props) {

    const history = useRouter();  
    const {capitols} = props;
    
    const tiles = capitols.map((c)=><TileCapitol key={c.slug} path={history.pathname} capitol={c}/>)


    return (
                <div className="columns is-multiline">                   
                    {tiles}                   
                </div>
            )
}

export default FabricaCapitols;