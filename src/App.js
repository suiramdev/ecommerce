import React, {Component} from 'react';
import './App.scss';
import Header from 'components/Header';
import Main from 'views/Main';
import Articles from 'views/Articles';
import PrivacyPolicy from 'views/PrivacyPolicy';
import Footer from 'components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <PrivacyPolicy />
                <Footer />
            </div>
        );
    }
}

export default App;