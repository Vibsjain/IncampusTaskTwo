import React, { Component } from 'react'
import './photopage.css'

export default class photopage extends Component {
    render() {
        // Rendering details of the element received as a prop from photobyid.js
        return (
            <div className="photodetail">
                <h1>Details of photo {this.props.obj.id} AlbumId : {this.props.obj.albumId}</h1>
                <h1>{this.props.obj.title}</h1>
                <img src={this.props.obj.url} alt='' />
            </div>
        )
    }
}
