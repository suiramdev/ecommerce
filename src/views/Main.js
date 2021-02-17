import React, {Component} from 'react';
import './Main.scss';
import Article from 'components/Article';
import Banner from 'images/banner.png';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Main__Header">
                    <img src={Banner} />
                </div>
                <section className="Main__Articles">
                    <h1>Articles in trends</h1>
                    <div className="Main__Articles-content">
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </div>
                </section>
                <section className="Main__Articles">
                    <h1>Recommended for you</h1>
                    <div className="Main__Articles-content">
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </div>
                </section>
                <section className="Main__Articles">
                    <h1>The one you looked</h1>
                    <div className="Main__Articles-content">
                        <Article />
                        <Article />
                        <Article />
                        <Article />
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;