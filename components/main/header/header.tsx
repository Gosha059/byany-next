import Logo from "./logo/logo"
import MainNav from "./main-nav/main-nav"
import { Container, Navbar } from "react-bootstrap"


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
            <Navbar 
            id={nav.id} 
            style={nav.style} 
            className={nav.classes} 
            expand="lg" 
            bg="light" 
            fixed="top" 
            >
                <Container fluid>
                    <Logo/>
                    <MainNav/>
                </Container>
            </Navbar>
        </header>
    )
}