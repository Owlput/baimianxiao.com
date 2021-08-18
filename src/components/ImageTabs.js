import React from 'react'
export default class ImageTabs extends React.Component{
    constructor (props){
        super(props)
    }
    render(){
        return(
                <div style={imageTabsStyle}>
                {images.map((image)=>(<div style={divStyle}><img style={imgStyle} src={image.src} key={image.id} />
                <p>{image.id}</p></div>))}
                </div>
        )
    }
}

const divStyle = {
    "width":"15em",
    "height":"23em",
    "backgroundColor":"grey",
    "margin":"1em 1em 1em 1em"
    
}
const imgStyle = {
    width:"14em",
    margin:"0.5em 0.5em 0.5em 0.5em"
}
const imageTabsStyle = {
    display:"flex",
    justifyContent:"space-around"
}
const images = [
    {
        id:1,
        src:"/img/3b17420363b353fceb70f37633ccbc0edb06e5da.jpg"
    },
    {
        id:2,
        src:"/img/75309657_p0.png"
    },
    {
        id:3,
        src:"/img/78449746_p0.jpg"
    }
]