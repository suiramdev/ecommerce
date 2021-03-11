import React, {Component} from 'react';
import './Main.scss';
import Article from 'components/Article';
import Banner from 'images/banner.png';
import Cookies from 'universal-cookie';
import ArticleView from "./ArticleView";

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

        window.scrollTo(0, 0);
    }

    render() {
        const {trends} = this.state;
        return (
            <div className="Main">
                <div className="Main__Header">
                    <img src={Banner} alt="banner"/>
                </div>
                <section className="Main__Articles">
                    <h1>Articles in trends</h1>
                    <div className="Main__Articles-content">
                        {trends && trends.map(item => <Article id={item._id}/>)}
                    </div>
                </section>
                <section className="Main__Articles">
                    <h1>Articles you recently looked at</h1>
                    <div className="Main__Articles-content">
                        {this.props.cookies.get("viewedArticles").map(id => <Article id={id}/>)}
                    </div>
                </section>
            </div>
        );
    }
}

export default (props) => {
    return <Main {...props} cookies={new Cookies()}/>
};