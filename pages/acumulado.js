import GridArticles from "../components/organisms/GridArticles"
import { ArticlesContext } from "../context/articles"
import { useState, useEffect } from "react"
import { getArticles } from "../utils/getArticles"
import { getTags, groupTags, orderTags } from "../utils/getTagList"
import Layout from "../components/template/Layout"

export default function Test () {
    
    const [state, setState] = useState({
        data: [],
        renderTags: [],
        loading: true
    });
    
    useEffect( () => {
        getArticles( 'https://api-test-ln.herokuapp.com/articles' ).then( response => { 
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
