import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({size,title,imageUrl,linkUrl,history,match})=>(
    <div className={`${size?size:'small'} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}
        >
        <div className="bg-effect" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
)
export default withRouter(MenuItem)