import React, {Component} from 'react';
import './Main.scss';
import Article from 'components/Article';
import Banner from 'images/banner.png';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trends: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:9000/articles/trending")
            .then(response => response.json())
            .then(data => this.setState({trends: data}));
    }

    render() {
        const {trends} = this.state;
        return (
            <div className="Main">
                <div className="Main__Header">
                    <img src={Banner} />
                </div>
                <section className="Main__Articles">
                    <h1>Articles in trends</h1>
                    <div className="Main__Articles-content">
                        {trends && trends.map(item => <Article label={item.article_label} price={item.article_price}
                                                               discount={item.article_discount}/>)}
                    </div>
                </section>
                <section className="Main__Articles">
                    <h1>Articles you looked at</h1>
                    <div className="Main__Articles-content">

                    </div>
                </section>
            </div>
        );
    }
}

export default Main;