import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (props)=>(
    <div className={`${props.menuItem.size} menu-item`}
        >
        <div className="bg-effect" style={{backgroundImage:`url(${props.menuItem.imageUrl})`}}></div>
            <div className='content'>
                <h1 className='title'>{props.menuItem.title}</h1>
                <span className='subtitle'>{props.menuItem.linkUrl}</span>
            </div>
        </div>
)
export default MenuItem