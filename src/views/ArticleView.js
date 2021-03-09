import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import './ArticleView.scss';

class ArticleView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:9000/articles/${this.props.id}`)
            .then(response => response.json())
            .then(data => this.setState({article: data}));
    }

    render() {
        return (
            <div className="ArticleView">
                <p>PropsID : {this.props.id}</p>
                <br/>
                <p>Article ID : {this.article.id}</p>
            </div>
        );
    }
}

export default (props) => {
    const { id } = useParams();
    return <ArticleView {...props} id={id} />
};