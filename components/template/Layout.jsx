import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import Banner from "../molecules/Banner";
import {
    main, 
    content, 
    contentBannerTop, 
    contentChildren, 
    spinner
} from '../../styles/Layout.module.css'
import { useArticles } from "../../context/articles";

export default function Layout({children}) {

    const {state} = useArticles()

    return (
        <div>
            <Header />
            <div className={contentBannerTop}>
                <Banner />
            </div>
            <main className={main}>
                <div className={content}>
                    <div className={contentChildren}>
                        { !state.loading ? children : <div className={spinner} /> }
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
