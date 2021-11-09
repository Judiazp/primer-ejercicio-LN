import GridArticles from "../components/organisms/GridArticles"
import { ArticlesContext } from "../context/articles"
import { useState, useEffect } from "react"
import { getArticles } from "../utils/getArticles"
import { getTags, groupTags, orderTags } from "../utils/getTagList"
import Layout from "../components/template/Layout"

export default function Test () {
    const urlApi = process.env.NEXT_PUBLIC_URL_API_LA_NACION
    const [state, setState] = useState({
        data: [],
        renderTags: [],
        loading: true
    });
    

    useEffect( () => {
        getArticles( urlApi ).then( response => { 
            const tags = getTags(response.articles)
            const tagsGroup = groupTags(tags)
            const orderedTags = orderTags(tagsGroup)
            setState({
                data: response.articles,
                renderTags: orderedTags,
                loading: false,
            });
        })
    }, [])

    return (
        <ArticlesContext.Provider value={{state}}>
            <Layout>
                <GridArticles />
            </Layout>
        </ArticlesContext.Provider>
    )
}
