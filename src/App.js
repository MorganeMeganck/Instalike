import React, { Component } from 'react';
    import './App.css';
    import Header from './Components/Header';
import PersonList from './Components/user';


    class App extends Component {
      render() {
        return <div className="App">
        <Header />
        <section className="App-main">
          <PersonList />
         
        </section>
      </div>;
      }
    }
    export default App;



