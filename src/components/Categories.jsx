import React from 'react'
import { useState } from "react";
 
const Categories =  React.memo(function ({ items, onClickItem }) {

    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = index => {
        setActiveItem(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>Все</li>

                {items.map((item, index) => (
                    <li className={activeItem === index ? 'active' : ''}
                        key={index}
                        onClick={() => onSelectItem(index)}>{item}
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Categories