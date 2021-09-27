import React from 'react'
export default class AuthorSidebar extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }

    render(){
        return(
            <div style={componentWrapperStyle}>
                <div style={AuthorInfoStyle.wrapper}>
                    <img src={this.props.authorInfo.propic} style={AuthorInfoStyle.image} alt={this.props.authorInfo.name}></img>
                    <p style={AuthorInfoStyle.text}>{this.props.authorInfo.name}</p>
                </div>
                <div style={RecentWorksStyle.wrapper}>
                    
                </div>
            </div>
        )
    }
}
const componentWrapperStyle = {

}
const AuthorInfoStyle = {
    wrapper:{

    },
    image:{

    },
    text:{

    },
    status:{}
}
const RecentWorksStyle = {
    wrapper:{

    },
    image:{

    },
}