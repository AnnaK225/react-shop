function Footer(){
    return(
        <div>
            <footer className="page-footer  green darken-1">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right"
                           href="https://annak225.github.io/react-shop/"target="_blank" rel="noveferrer" >Repo</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export {Footer}