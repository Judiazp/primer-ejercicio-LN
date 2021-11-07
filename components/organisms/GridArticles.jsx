import CardArticle from "../molecules/CardArticle";
import { useArticles } from '../../context/articles'
import {grid} from '../../styles/GridArticles.module.css'
import Anchors from "./Anchors";

export default function GridArticles() {

    const { state } = useArticles()

    return (
        <div>
            <div className="title">
                <h1>Acumulado Grilla</h1>
                <Anchors array={state.renderTags.slice(0, 10)} />
            </div>
            <div className={grid}>
                {
                    state.data.filter(item => item.subtype === "7")
                    .map(article => (
                        <CardArticle 
                            key={article._id} 
                            urlImage={article['promo_items'].basic.url}
                            title={article.headlines.basic} 
                            description={article['promo_items'].basic.subtitle}
                        />
                    ))
                }
            </div>
        </div>
    )
}
