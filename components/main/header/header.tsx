import Logo from "./logo/logo"
import MainNav from "./main-nav/main-nav"



const nav = {
    id: "navbar",
    classes: "navbar-expand-lg",
    style: {
        fontSize: "16px",
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}


export default function Header(): any {
    return(
        <header>
            <div 
            id={nav.id} 
            style={nav.style} 
            className={nav.classes} 
           
            >
                <div>
                    <Logo/>
                    <MainNav/>
                </div>
            </div>
        </header>
    )
}