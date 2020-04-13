import NavBar from './NavBar';
import Social from './Social'

function Layout(props) {

    return (<div>                           
                <NavBar isHome={props.isHome} />
                <div>
                    {props.children}
                </div>    
                <div className="footer-social-container">
                    <Social/>
                </div>
            </div>)

}

export default Layout;