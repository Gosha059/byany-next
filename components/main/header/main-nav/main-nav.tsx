import GeneralMenu from "./common-main-nav/general-menu";
import { Nav } from "react-bootstrap";

type MenuItems = {
    [key: string]: string[];
};

const listMenu: MenuItems = {
    EXPERTISE: ["Structural Design", "Multi-unit ADU", "Seismic Retrofits", "Construction Management", "Consulting"],
    PROJECTS: ["Featured Projects", "Seismic Retrofits", "Commercial", "Institutional", "Multi-unit", "Custom Homes"],
    ABOUT: ["Profile", "People", "Clients"],
    CAREERS: [],
    CONTACT: [],
}

export default function MainNav() {
    return (

        
        <div className="collapse navbar-collapse justify-content-end" id="main-nav">
          <div className="navbar-nav ml-auto pt-1">
                <GeneralMenu data={listMenu}/>
          </div>
        </div>

    )
}