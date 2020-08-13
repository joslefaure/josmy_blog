// Head.js
import React, { Component } from 'react'

export default class Header extends Component {

  render(){
    
    const data = this.props.data

    // console.log(data)
    // console.log(this.props.location)
    const hero = data.metafields[0].url
    const headline = data.title
    // const subheadline = data.page.subheadline

    return (
      <div>
        <header className="intro-header" style={ { backgroundImage: "url('" + hero + "')" } }>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div className="site-heading">
                  <h1>{ headline }</h1>
                  <hr className="small" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}