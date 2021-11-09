import GridArticles from "../components/organisms/GridArticles"
import { ArticlesContext } from "../context/articles"
import { useState, useEffect } from "react"
import { getArticles } from "../utils/getArticles"
import { getTags, groupTags, orderTags } from "../utils/getTagList"
import Layout from "../components/template/Layout"

export default function Test ({articles}) {
    
    const [state, setState] = useState({
        data: [],
        renderTags: [],
        loading: true
    });
        
    useEffect( () => {
        const tags = getTags(articles)
        const tagsGroup = groupTags(tags)
        const orderedTags = orderTags(tagsGroup)
        setState({
            data: articles,
            renderTags: orderedTags,
            loading: false,
        });
    }, [articles])
    
    return (
        <ArticlesContext.Provider value={{state}}>
            <Layout>
                <GridArticles />
            </Layout>
        </ArticlesContext.Provider>
    )
}

export async function getServerSideProps() {
    const urlApi = process.env.NEXT_PUBLIC_URL_API_LA_NACION
    const articles = await getArticles( urlApi )
    
   return {
       props: articles
   }
}