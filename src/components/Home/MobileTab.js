import React from 'react'

export default function CustomTabs({ category }) {


    return (
        <div
            style={{
                width: "120px",
                backgroundImage: `url(${category?.category_image})`,
                backgroundSize: "100% 100%",
                height: "65px",
                position: "relative",
                //  backgroundColor: "blue",
                color: "white",
                fontSize: "10px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // textAlign:'center'
            }}
        >
            <p>{category?.category_name}</p>
            {/* <img
                  alt=""
                  src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/New-Arrivals.jpg"
                  style={{
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                    maxHeight: "100%"
                  }}
                /> */}
        </div>
    )
}
