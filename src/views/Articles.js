import React, {Component} from 'react';
import './Articles.scss';
import Article from 'components/Article';

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:9000/articles")
            .then(response => response.json())
            .then(data => this.setState({articles: data}));
    }

    render() {
        const {articles} = this.state;
        return (
            <div className="Articles">
                <div className="Articles-content">
                    {articles && articles.map(item => <Article label={item.article_label} price={item.article_price}
                                                           discount={item.article_discount}/>)}
                </div>
            </div>
        );
    }
}

export default Articles;