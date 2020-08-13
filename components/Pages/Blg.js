// Blog.js
import React, { Component } from 'react'
import _ from 'lodash'
import config from '../../config'

// Components
import Head from '../Partials/Head'
import BlogList from '../Partials/BlogList'
import BlogSingle from '../Partials/BlogSingle'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Blg extends Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | ' + data.page.title
  }

  getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'blog',
      post_slug: this.props.params.slug
    })
  }

  getMoreArticles(){
    AppDispatcher.dispatch({
      action: 'get-more-items'
    })
  }

  render(){

    const data = this.props.data
    // console.log(data)
    const globals = data.globals
    const pages = data.pages
    let main_content

    if(!this.props.params.slug){

      main_content = <BlogList getMoreArticles={ this.getMoreArticles } data={ data }/>

    } else {

      const articles = data.articles
      
      // Get current page slug
      const slug = this.props.params.slug
      const articles_object = _.keyBy(articles, 'slug')
      const article = articles_object[slug]
      main_content = <BlogSingle article={ article } />

    }
    // if (this.props.data.articles.slug == this.props.params.slug){
    //   console.log("Bingo")
    // }

    const articles = data.articles
      
    // Get current page slug
    const slug = this.props.params.slug
    const articles_object = _.keyBy(articles, 'slug')
    const article = articles_object[slug]
    // main_content = <BlogSingle article={ article } />
    const data1 = articles_object[this.props.params.slug]
    
    
    return (
      <div>
        <Head data={ data1 }/>
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            { main_content }
            </div>
          </div>
        </div>
      </div>
    )
  }
}