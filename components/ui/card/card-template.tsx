import Link from "next/link"
import styles from "./card-template.module.css"
import { Card } from "react-bootstrap"

export default function CardTemplate () {
    return (
        <>
        <Link href="#" className={`${styles.cardHomePage}`}
        style = {{
            backgroundImage: `url("card/project-1-md-icon.jpg")`,
        }}
        >
            <span className={`${styles.btnCard}`}>Custom Home</span>
        </Link>
        </>
    )
}