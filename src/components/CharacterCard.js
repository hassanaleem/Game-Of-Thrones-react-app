import React from 'react'

const CharacterCard = ({item}) => {
    return (
        <div className = 'card'>
            <div className = 'card-inner'>
                <div className = 'card-front'>
                    <img src={item.imageUrl} alt="" />
                </div>  
            <div className = 'card-back'>
                <ul>
                    <li>
                        <strong>Name: </strong> {item.fullName}
                    </li>
                    <li>
                        <strong>House: </strong> {item.family}
                    </li>
                    <li>
                        <strong>
                            Title:
                        </strong>
                        {item.title}
                    </li>
                </ul>

            </div>
            </div>
            
            
        </div>
    )
}

export default CharacterCard
