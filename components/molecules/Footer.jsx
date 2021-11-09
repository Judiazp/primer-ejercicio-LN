import LogoLN from '../atoms/LogoLN'
import Anchors from '../atoms/Anchors'
import {
    contentFooter, 
    footerHeader, 
    footerCopyright, 
    footerCopyrightFiscal, 
    imgDataFiscal, 
    imgGda, 
    copyright,
    contentAppStore,
    contentSocialNetwork,
    links,
    captcha
} from '../../styles/Footer.module.css'
import PlayStore from '../atoms/PlayStore'
import AppleStore from '../atoms/AppleStore'

export default function Footer() {
    return (
        <footer>
            <div className={contentFooter}>
                <section className={footerHeader}>
                    <div className={contentSocialNetwork}>
                        redes sociales
                    </div>
                    <div className="col-desksm-4 col-desk-6 footer-header__logo">
                        <LogoLN />
                    </div>
                    <div className={contentAppStore}>
                        <PlayStore />
                        <AppleStore />
                    </div>
                </section>

                <section className={links}>
                    <div>
                        <Anchors array={[
                            'Mapa del sitio',
                            'Ayuda',
                            'Terminos y condiciones',
                            '¿Como anunciar?',
                            'Suscribirse al diario impreso'
                        ]} />
                    </div>
                    <div className={captcha}>
                        <p>
                            Protegido por re CAPTCHA: 
                        </p>
                        <Anchors array={[
                            'Condiciones',
                            'Privacidad'
                        ]} />
                    </div>
                </section>

                <section className={footerCopyright}>
                    <div className={copyright}>
                        <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>
                    </div>
                    <div className={footerCopyrightFiscal}>
                        <p>
                            <img
                                src="https://static.glanacion.com/v2/ln/img/gda.jpg"
                                alt="gda"
                                className={imgGda}
                            />
                            Miembro de GDA. Grupo de Diarios América
                            <a 
                                href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx"
                                className={imgDataFiscal}    
                            >
                                <img
                                    src="https://static.glanacion.com/v2/ln/img/data.jpg"
                                    alt="Data fiscal"
                                    
                                />
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    )
}
