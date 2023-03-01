import React from "react";
import styles from "./video.module.css"

const Video = () => {
    return (
        <div>
            <video autoPlay muted loop className={styles.video}>
                <source src="/video/sun.webm" type="video/webm"></source>
            </video>
        </div>
    )
}

export default Video
