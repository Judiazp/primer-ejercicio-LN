import {primary, suscribe} from '../../styles/Button.module.css'

export default function Button({text, secondary}) {
    return (
        <button
            className={secondary ? suscribe : primary}
        >
            {text}
        </button>
    )
}
