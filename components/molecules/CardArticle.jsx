import {card, contentImage, body, image, contentDate} from '../../styles/CardArticle.module.css'

export default function CardArticle({urlImage, title, date}) {
        
    const dateFormat = (date) => {
        let formatedDate = new Date(date)
        return `
            ${formatedDate.getDate()} de 
            ${formatedDate.toLocaleString('default', {month: 'long'})} de 
            ${formatedDate.getFullYear()}
        `
    }

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
                <div className={contentDate}>
                    <p> {dateFormat(date)} </p>
                </div>
            </div>
        </div>
    )
}
