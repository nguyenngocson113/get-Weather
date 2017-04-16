import React, { Component } from 'react';
import axios from 'axios';
const LINK = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=metric&q=';

export default {
  getTemp(city, cb){
    axios.get( LINK + city )
      .then((response) => {
        cb(response)
      }).catch((err) => {
      console.log(err)
    })
}
}
