import Link from 'next/link';
function Social() {
    return (<div className="social">
        <div className="social-contenidor">
            <a href="https://github.com/tr1c4f0rt" target="_blank">Github</a>
            <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/deed.ca">CC-BY-4.0 Internacional de Creative Commons</a>
            <Link href="/funcionament">
                <a className="pastilla-brave-micro">Gaudeix d'aquesta lectura amb Brave</a>
            </Link>
            
        </div>
    </div>)
}

export default Social;