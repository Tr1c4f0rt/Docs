import NavBar from './NavBar';

function Layout(props) {

    return (<div>                           
                <NavBar isHome={props.isHome} />
                <div>
                    {props.children}
                </div>    
            </div>)

}

export default Layout;