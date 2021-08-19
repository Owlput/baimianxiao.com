import React from "react"
export default class NavBar extends React.Component{
    constructor (props){
        super(props)
    }
    render(){
        return (
            <div style={navStyle}>
                <p>首页</p>

            </div>
        )
    }
}
const navStyle = {
    fontSize:"20px"
}