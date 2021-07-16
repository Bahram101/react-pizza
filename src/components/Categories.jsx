import React from 'react'
import { useState } from "react";

function Categories({ items }) {

    const [activeItem, setActiveItem] = useState(null)

    const onClickItem = index => {
        setActiveItem(index)
    }

    // console.log('cat updated');

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>Все</li>

                {items.map((item, index) => (
                    <li className={activeItem === index ? 'active' : ''}
                        key={index}
                        onClick={() => onClickItem(index)}>{item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories