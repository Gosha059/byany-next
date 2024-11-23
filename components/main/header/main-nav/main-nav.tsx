import GeneralMenu from "./common-main-nav/general-menu";

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
        <div className=" relative flex flex-row justify-between gap-10 relative " id="main-nav">
                <GeneralMenu data={listMenu /* menu for PC and Lg screen*/}/> 
        </div>
    )
}