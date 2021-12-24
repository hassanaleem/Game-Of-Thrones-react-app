import React from 'react'
import CharacterCard from './CharacterCard'

const Characters = ({ items }) => {
    return (
        <div className = "cards">
            {items.map((item) => (
               <CharacterCard item = {item} />
             ) )}
        </div>
    )
}

export default Characters
