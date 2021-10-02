import React from 'react'
export function PixivIcon(props){
    return(
        <a href={props.url}>
            <img src={"../../../public/assets/icons/pixiv.ico"}></img>
        </a>
    )
}