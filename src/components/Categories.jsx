import React from 'react'
import { useState } from "react";
 
const Categories =  React.memo(function ({ items, onClickItem, activeCategory }) {

    const onSelectItem = index => {
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>Все</li>

                {items.map((item, index) => (
                    <li className={activeCategory === index ? 'active' : ''}
                        key={index}
                        onClick={() => onSelectItem(index)}>{item}
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default Categories