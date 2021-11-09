import Link from 'next/link'
import PropTypes from 'prop-types';

import {anchors, tagList} from '../../styles/Anchors.module.css'

export default function Anchors({array}) {
        
    return (
        <div className={tagList}>
            {
                array.map( item => (
                    <Link 
                        href={`#/tema/${item.slug || item }`}
                        key={item.slug || item}
                    >
                        <a className={anchors}>
                            {item.text || item}
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

Anchors.propTypes = {
    array: PropTypes.array
}