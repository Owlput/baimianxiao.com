import React from "react";
import Taggie from "./Taggie";

export default function TagCollection(props){

    const testTags = [
        {
            tagName:"test1",
            tagCount:2
        },
        {
            tagName:"test2",
            tagCount:3
        },
        {
            tagName:"test3",
            tagCount:3
        }
    ]
    
    const tagData = props.tags? props.tags:testTags
    
    return(
        <div style={TagWrapperStyle}>
            {
                tagData.map((tag)=><Taggie {...tag} key={tag.tagName}></Taggie>)
            }
        </div>
    )
}
const TagWrapperStyle ={
    display:"flex",
}