import React, {Component} from 'react';
import './Article.scss';
import Placeholder from 'images/placeholder.png';
import {ShoppingCart} from "@material-ui/icons";

class Article extends Component {
    render() {
        return (
            <div className="Article">
                <img src={Placeholder} />
                <div className="Article__Promo">
                    <span>-15%</span>
                </div>
                <div className="Article__Content">
                    <span className="Article__Name">Lorem ipsum dolor</span>
                    <div>
                        <span className="Article__Price">14.99 €</span>
                        <span className="Article__OldPrice">29.99 €</span>
                    </div>
                    <button className="Article__Buy">Add to cart<ShoppingCart /></button>
                </div>
            </div>
        );
    }
}

export default Article;