import CardTemplate from "@/components/ui/card/card-template"

import styles from "./card-nfo.module.css"

export default function CardInfo() {
    return (
        <>
        <div className={`${styles.recentProject}`}>
            <h3>Futured Projects</h3>
            <div className="d-flex flex-wrap justify-content-center">
                <CardTemplate/>
            </div>
        </div>
        
        </>
    )
}