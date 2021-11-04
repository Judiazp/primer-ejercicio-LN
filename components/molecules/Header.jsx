import HamburgerMenu from '../atoms/HamburgerMenu'
import Search from '../atoms/Search'
import LogoLN from '../atoms/LogoLN'
import Button from '../atoms/Button'
import {header, contentItems, colButton, colMenu} from '../../styles/Header.module.css'

export default function Header() {
    return (
        <header className={header}>
            <div className={contentItems}>    
                <div className={colMenu}>
                    <HamburgerMenu />
                    <Search />
                </div>
                <div>
                    <LogoLN />
                </div>
                <div className={colButton}>
                    <Button 
                        text="suscribite"
                        secondary
                    />
                    <Button text="ingresar"/>
                </div>
            </div>
        </header>
    )
}
