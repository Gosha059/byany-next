import Link from "next/link"
import styles from "./card-template.module.css"


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