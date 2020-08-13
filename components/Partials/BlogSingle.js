// BlogSingle.js
import React, { Component } from 'react'
import { Link } from 'react-router'

// <Link to="/" className="btn btn-default" style={ style }>&lt;&lt; Back to Article List</Link>

export default class BlogSingle extends Component {
  
  render(){
    
    const article = this.props.article

    const style = {
      marginBottom: 20
    }
    
    return (
      <div>
        <div dangerouslySetInnerHTML={ {__html: article.content } }></div>
      </div>
    )
  }
}