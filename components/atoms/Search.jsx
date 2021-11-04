import {input, search} from '../../styles/Search.module.css'

export default function Search() {
    return (
        <form className={search}>
            <input 
                className={input}
                type="text"
                placeholder="Buscar"
            />
        </form>
    )
}
