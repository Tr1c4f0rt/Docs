import NavBar from './NavBar';
import Head from 'next/head';

function Layout({ children }) {

    return (<div>                           
                <NavBar />
                <div className="container">
                    {children}
                </div>    
            </div>)

}

export default Layout;