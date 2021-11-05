import Header from "../components/molecules/Header"
import CardArtile from '../components/molecules/CardArticle'
import { ArticlesContext } from "../context/articles"
// import { useFetch } from "../hooks/useFetch"
import { useState, useEffect } from "react"
import { getArticles } from "../utils/getArticles"

export default function Test () {
    
    // const { data, tags,  } = useFetch('https://api-test-ln.herokuapp.com/articles')

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getArticles( 'https://api-test-ln.herokuapp.com/articles' ).then( response => {
            setState({
                data: response.articles,
                loading: false,
            });
        } )
    }, [])

    return (
        <ArticlesContext.Provider
            value={{
                state,
                setState
            }}
        >
            <div>
                <Header />
                <div>
                    <CardArtile />
                </div>
            </div>
        </ArticlesContext.Provider>
    )
}
