import Logo from "./logo/logo"
import MainNav from "./main-nav/main-nav"



export default function Header(): any {
    return(
        <header className="pt-3 pb-3">
                <nav className="container flex flex-row justify-between mx-auto">
                    <Logo/>
                    <MainNav/>
                 </nav>
        </header>
    )
}