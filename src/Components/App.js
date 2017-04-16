import React, { Component } from 'react';
import Temperature from '../Api';
import './App.scss';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notice: '',
      inputValue: ''
    }
  }
  componentWillMount() {
    console.log('hello');
  }
  getWeather(){
    const {
      inputValue: city
    } = this.state;
    console.log(city)
    Temperature.getTemp(city, (data) => {
      const {
        data: {
          main: {
            temp
          }
        }
      } = data;
      const notice = `It is ${temp} in ${city}`;
      this.setState({notice})
    })
  }
  updateInputValue(e){
    this.setState({ inputValue: e.target.value });
  }
  render () {
    const {
      notice ='',
      inputValue = ''
    } = this.state;
    return (
      <div class="app">
        <h1 class="title">Get Weather</h1>
        <input class= "search" value={this.state.inputValue} onChange={(e) => this.updateInputValue(e)} placeholder= "Search weather by city" ></input><br/>
        <button class= "getWeather" onClick={() => this.getWeather()} >Get Weather</button>
        <p>{notice}</p>
      </div>
    )
  }
}
