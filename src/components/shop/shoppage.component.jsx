import React from 'react';
import './shoppage.styles.scss'
import SHOP_DATA from './shopData'
import CollectionPreview from "../preview-collection/previewcollection.component"

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            collections:SHOP_DATA
              
        }
    }
    render(){
        const {collections} = this.state; 
        return(
            <div className="shop-page">
            {collections.map(({id, ...restItems})=>(
                <CollectionPreview key={`shop_${id}`} {...restItems} />
            ))}
               
            </div>
        )
    }
}

export default ShopPage