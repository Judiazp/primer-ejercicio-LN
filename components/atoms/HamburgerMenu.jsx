import {line, hamburger, menuText, } from '../../styles/HamburgerMenu.module.css'

export default function HamburgerMenu() {
    return (
        <div className={hamburger}>
            <div >
                <span className={line}></span>
                <span className={line}></span>
                <span className={line}></span>
            </div>
            <p className={menuText}>
                Menú
            </p>
        </div>
    )
}
