import React, { Component } from 'react';
import axios from 'axios';
const LINK = 'http://wndemo1.worldnow.com/story/34484960/be-your-childs-valentine?clienttype=container.json';

export default {
  getContent( cb ){
    axios.get( LINK )
      .then((data) => {
        cb(data)
        console.log(data)
      }).catch((err) => {
      console.log(err)
    })
}
}
