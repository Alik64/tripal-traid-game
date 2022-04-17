import { useState } from 'react';

import PropTypes from 'prop-types'
import cn from 'classnames'

import Heading from '../Heading';
import Text from '../Text';

import { ReactComponent as Like } from './assets/heart.svg'

import s from './CharacterCard.module.scss'


const CharacterCard = ({
    id,
    name,
    src,
    humanName,
    description,

}) => {



    const [active, setActive] = useState(false)
    const likeHandler = () => {
        setActive(prev => !prev)
    }

    return (
        <div className={s.root} >
            <img src={src} alt={name} className={s.cardImage} />
            <div className={s.cardDetails}>
                <Heading level={2} className={s.cardName}>
                    {name}
                </Heading>
                <Heading level={4} className={s.cardHumanName}>
                    {humanName}
                </Heading>
                <Text className={s.cardDescription}>
                    {description}
                </Text>

                <div className={s.cardMeta}>
                    <div
                        onClick={likeHandler}
                        className={cn(s.like, {
                            [s.active]: active
                        })} >
                        <Like />
                    </div>
                    <div className={s.readBio}>
                        <a href="#">Read bio</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

CharacterCard.protoTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    humanName: PropTypes.string,
    description: PropTypes.string,
}

export default CharacterCard