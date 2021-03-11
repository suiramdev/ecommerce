import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Header from 'components/Header';
import Main from 'views/Main';
import Articles from 'views/Articles';
import ArticleView from 'views/ArticleView';
import PrivacyPolicy from 'views/PrivacyPolicy';
import Footer from 'components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/articles" component={Articles} />
                    <Route path="/article/:id" component={ArticleView} />
                    <Route path="/privacy" component={PrivacyPolicy} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;