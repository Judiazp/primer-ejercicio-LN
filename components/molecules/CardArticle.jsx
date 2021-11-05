import Image from 'next/image'
import { useArticles } from '../../context/articles'
import {card, image} from '../../styles/CardArticle.module.css'
import { getTagsList } from '../../utils/getTagList'

export default function CardArticle({urlImage, description}) {

    const { state } = useArticles()

    getTagsList(state.data)

    return (
        <div className={card}>
            <div className={image} >
                <Image
                    src={urlImage}
                    width='100%'
                    height="100%"
                    alt="image"
                />
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}
