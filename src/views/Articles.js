import React, {Component} from 'react';
import {useLocation} from 'react-router-dom';
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
        fetch(`http://localhost:9000/articles?search=${this.props.params.get("search")}`)
            .then(response => response.json())
            .then(data => this.setState({articles: data}));
    }

    render() {
        const {articles} = this.state;
        return (
            <div className="Articles">
                <div className="Articles-content">
                    {articles && articles.map(item => <Article label={item.name} price={item.price}
                                                           discount={item.discount}/>)}
                </div>
            </div>
        );
    }
}

export default (props) => {
    return <Articles {...props} params={new URLSearchParams(useLocation().search)}/>
};