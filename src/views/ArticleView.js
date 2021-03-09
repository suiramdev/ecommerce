import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import './ArticleView.scss';

class ArticleView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ArticleView">
                <p>{this.props.id}</p>
            </div>
        );
    }
}

export default (props) => {
    const { id } = useParams();
    return <ArticleView {...props} id={id} />
};