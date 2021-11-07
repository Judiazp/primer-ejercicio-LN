import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import Banner from "../molecules/Banner";
import {main, content, contentBannerTop} from '../../styles/Layout.module.css'

export default function Layout({children}) {
    return (
        <div>
            <Header />
                <div className={contentBannerTop}>
                    <Banner />
                </div>
            <main className={main}>
                <div className={content}>
                    <div>
                        {children}
                    </div>
                    <div>
                        <Banner orientation='right' />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}