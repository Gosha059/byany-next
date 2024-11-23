import Logo from "./logo/logo"
import MainNav from "./main-nav/main-nav"



export default function Header(): any {
    return(
        <header className=" fixed top-0 left-0 right-0 z-50 pt-3 pb-3 bg-white w-full">
                <nav className="container flex flex-row justify-between mx-auto " >
                    <Logo/>
                    <MainNav/>
                 </nav>
        </header>
    )
}