import Link from "next/link"
import Image from "next/image"
import styles from "./Logo.module.css"

const logoInfo = {
    id: "logo",
    clasess: styles.logo,
    link: "/",
    files: "biayna-logo.svg",
    

}

export default function Logo() {
    return(
        <Link href={logoInfo.link}>
            <span
                id={logoInfo.id}
                className={logoInfo.clasess}
                style= {{
                    backgroundImage: `url(${logoInfo.files})`,
                }}
            ></span>
        </Link>
    )
}