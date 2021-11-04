import Link from 'next/link'
import {logoLN} from '../../styles/LogoLN.module.css'

export default function LogoLN() {
    return (
        <Link href="/">
            <a>
                <h2 className={logoLN}>La Nacion</h2>
            </a>
        </Link>
    )
}
