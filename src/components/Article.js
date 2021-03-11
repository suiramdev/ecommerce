import React, {Component} from 'react';
import './Article.scss';
import Placeholder from 'images/placeholder.png';
import {ShoppingCart} from "@material-ui/icons";
import {useHistory} from "react-router-dom";

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: []
        }

        this.viewArticle = this.viewArticle.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:9000/article/${this.props.id}`)
            .then(response => response.json())
            .then(data => this.setState({article: data[0]}));
    }

    viewArticle() {
        this.props.history.push(`/article/${this.props.id}`);
    }

    addToCart(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <a className="Article" onClick={this.viewArticle}>
                <img src={Placeholder} />
                {this.state.article.discount > 0 && (
                    <div className="Article__Promo">
                        <span>-{this.state.article.discount}%</span>
                    </div>
                )}
                <div className="Article__Content">
                    <span className="Article__Name">{this.state.article.label}</span>
                    <div>
                        <span className="Article__Price">{(this.state.article.price-this.state.article.price*this.state.article.discount/100).toFixed(2)} €</span>
                        {this.state.article.discount > 0 && (
                            <span className="Article__OldPrice">{this.state.article.price} €</span>
                        )}
                    </div>
                    <button className="Article__Buy" onClick={this.addToCart}>Add to cart<ShoppingCart /></button>
                </div>
            </a>
        );
    }
}

export default (props) => {
    return <Article {...props} history={useHistory()}/>
};