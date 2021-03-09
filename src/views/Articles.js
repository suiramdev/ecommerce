import React, {Component} from 'react';
import {useParams, useRouteMatch, withRouter} from 'react-router-dom';
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
        console.log(this.props.params.search);
        fetch("http://localhost:9000/articles?search="+this.props.params.search)
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

export default withRouter((props) => {
    const params = useParams();
    console.log(useRouteMatch());
    return <Articles {...props} params={params}/>
});