import React from 'react'
export default class AuthorSidebar extends React.Component{
    constructor(){
        this.state={

        }
    }
    Render(){
        return(
            <div style={componentWrapperStyle}>
                <div style={AuthorInfoStyle.wrapper}>
                    <img style={AuthorInfoStyle.image}></img>
                    <p style={AuthorInfoStyle.text}></p>
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