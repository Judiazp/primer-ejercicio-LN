import {bannerTop, bannerRight} from '../../styles/banner.module.css'

export default function Banner({orientation}) {
    return (
        <div 
            className={ 
                orientation === 'right' ? bannerRight : bannerTop 
            }
        />

    )
}
