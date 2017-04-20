import React, { Component } from 'react';
import APIgetContent from '../Api';
import './App.scss';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: '',
      headline: '',
      abstract: '',
      filename: '',
      contentClassification:'',
      caption:'',
      name:'',
      baseurl:''
    }
  }

  componentWillMount() {
    const {
      content
    } = this.state;
    APIgetContent.getContent((data) => {
    const {
      data:{
        body,
        headline,
        abstract,
        contentClassification,
        owner:{
          name,
          baseurl
        },
        storyimages,
        }
    } = data;

    const [{
      filename,
      caption
    }] = storyimages;
      this.setState({ body, headline, abstract, filename, caption, contentClassification, name, baseurl })
    })
  }


  render () {
    const {
      body = '',
      headline = '',
      abstract = '',
      filename = '',
      contentClassification ='',
      caption='',
      name='',
      baseurl=''
    } = this.state;
    console.log(caption);
    return (
      <div class="MyComponent">
        <div class="MyComponent-img"><img class="MyComponent-img--image" src={filename}/></div>
        <div>{caption}</div>
        <div>
        <div class="MyComponent-field">{contentClassification}</div>
        <h1 class="MyComponent-title">{headline}</h1>
        <div dangerouslySetInnerHTML={{__html: abstract}} /></div>
        <p><strong><strong>By {name}<br></br>From <a href= {`http://${baseurl}`} target="_blank">{name}</a></strong></strong></p>
        <div class = "MyComponent-body"dangerouslySetInnerHTML={{__html: body}} />
      </div>
    )
  }
}
