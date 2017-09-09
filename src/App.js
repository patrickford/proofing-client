import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux'
import PhotoUploadForm from'./components/PhotoUploadForm'
import AlbumDisplay from'./components/AlbumDisplay'
import HeaderNav from './components/HeaderNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <h2>Welcome to Proofing</h2>
        <PhotoUploadForm/>
        <AlbumDisplay/>
      </div>
    );
  }
}


export default App;
