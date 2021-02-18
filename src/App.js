import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from 'components/Header';
import Main from 'views/Main';
import Articles from 'views/Articles';
import PrivacyPolicy from 'views/PrivacyPolicy';
import Footer from 'components/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/"><Main /></Route>
                        <Route path="/articles"><Articles /></Route>
                        <Route path="/privacy"><PrivacyPolicy /></Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;