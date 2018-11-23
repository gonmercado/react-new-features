import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Sidebar from './comp/layout/Sidebar';
import AppBody from './comp/layout/AppBody';
import Header from './comp/layout/Header';
import { UserContext } from './userContext';
import { TitleContext } from './titleContext';

class App extends Component {
  state = {
    userName: 'Gonzalo',
    pageTitle: 'Este es el titulo por defecto'
  };

  handleChangeUser = userName => this.setState({ userName });

  handlePageTitleChange = pageTitle => this.setState({ pageTitle });

  render() {
    const { userName, pageTitle } = this.state;
    return (
      <div className="App">
        <UserContext.Provider value={ { userName, changeUser: this.handleChangeUser } }>
          <TitleContext.Provider value={ { pageTitle, changeTitle: this.handlePageTitleChange } }>
            <Header/>
            <Router>
              <div className={ 'App-body-wrapper'}>
                <Sidebar />
                <AppBody />
              </div>
            </Router>
          </TitleContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
