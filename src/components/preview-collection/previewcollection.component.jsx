import React from 'react';
import './previewcollection.styles.scss';
import CollectionItem from "../collection-item/collectionItem.component";

const CollectionPreview = ({title,items})=>(
    <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {items.filter((item,idx)=>idx<4).map(({id, ...restItem})=>(
            <CollectionItem key={`items_${id}`} {...restItem} ></CollectionItem>

        ))}
    </div>
    </div>
)

export default CollectionPreview