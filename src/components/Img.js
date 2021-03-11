import React from 'react'

export default function Img() {
    return (
        <div className="d-flex">
            <div className="mx-3 p-2">
            <p> BALISE IMG : Le chemin se fait comme si on se trouvait dans le dossier public</p>
                <img src="./img/img.webp" alt=""/>
            </div>
            <div className="bgImage text-white mx-3 p-2">
            <p>BG-IMAGE : l'image doit se trouver dans dans la partie src, dans un dossier asset</p>   
            </div>
        </div>
    )
}
