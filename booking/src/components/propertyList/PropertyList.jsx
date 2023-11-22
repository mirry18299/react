import React from "react";
import "./propertyList.css"

const PropertyList = () => {
    return (
    <div className="pList">
        <div className="pListItem">
            <img src="hotel.webp" className="pListImg" />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h1>233 hotels</h1>
            </div>
        </div>

        
        <div className="pListItem">
            <img src="Apartmnts.jfif" className="pListImg" />
            <div className="pListTitles">
              <h1>Apartments</h1>
              <h1>2331 Apartments</h1>
            </div>
        </div>

        
        
        <div className="pListItem">
            <img src="resort.jfif" className="pListImg" />
            <div className="pListTitles">
              <h1>Resorts</h1>
              <h1>233 hotels</h1>
            </div>
            </div>

            <div className="pListItem">
            <img src="villa.jfif" className="pListImg" />
            <div className="pListTitles">
              <h1>Villas</h1>
              <h1>2331 hotels</h1>
            </div>
        </div>


        <div className="pListItem">
            <img src="cabin.jfif" className="pListImg" />
            <div className="pListTitles">
              <h1>Cabins</h1>
              <h1>2331 hotel</h1>
            </div>
        </div>

        </div>
    
    )
}

export default PropertyList