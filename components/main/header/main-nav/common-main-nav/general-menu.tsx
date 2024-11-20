"use client"


import Link from "next/link";
import { useState } from "react";
import { NavDropdown, Nav } from "react-bootstrap";


type GeneralMenuProps = {
    data: {
        [key: string]: string[];
    };
};


export default function GeneralMenu ({data}: GeneralMenuProps) {
    const [show, setShow] = useState<string | null>(null);
    function showMenu (category:string, items:string[]){
        return items.length>0? setShow(category): false
    }
    return (
        <>
            <Nav className="">
                {Object.entries(data).map(([category, items]) => (

                    <div
                        className="nav-item dropdown"
                        key={category}
                        onMouseEnter={()=>showMenu(category,items)}
                        onMouseLeave={()=>setShow(null)}
                    >
                        <Link 
                        href={category} 
                        key={`${category}-menu`} 
                        className="nav-link dropdown-toggle">
                            {category}
                        </Link>
                        <div className={`dropdown-menu ${show===category ? "show" : ""}`}>
                            {items.map((item)=> (
                                <Link 
                                href={item} 
                                key={item} 
                                className="dropdown-item">
                                    {item}
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                         
                   
                    
                ))}
            </Nav>
       </>
    )
}