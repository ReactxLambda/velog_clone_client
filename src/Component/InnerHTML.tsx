import React, {useEffect, useState} from 'react'
type InnerHTMLType = {
    contents : string
};
const InnerHTML : React.FC<InnerHTMLType> = ({contents}) =>{
    return (
        <div>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"></link> 
            <div id='markdown-viewer'></div>
        </div>
    )
}  
export default InnerHTML;