import {card, contentImage, body, image, date} from '../../styles/CardArticle.module.css'

export default function CardArticle({urlImage, title, date}) {
        
    return (
        <div className={card}>
            <div className={contentImage} >
                <a href="#">
                    <img
                        className={image}
                        src={urlImage}
                        alt="image"
                    />
                </a>
            </div>
            <div className={body}>
                <p href='#'>
                    <strong>
                        {title}.
                    </strong> {' '}
                    <span>
                        que tiene de escudo al Che Guevara y donde izan la bandera de Cuba
                    </span>
                </p>
            </div>
            <div className={date}>
                <p> {date} </p>
            </div>
        </div>
    )
}
