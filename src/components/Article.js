import React, {Component} from 'react';
import './Article.scss';
import Placeholder from 'images/placeholder.png';
import {ShoppingCart} from "@material-ui/icons";

class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Article">
                <img src={Placeholder} />
                {this.props.discount > 0 && (
                    <div className="Article__Promo">
                        <span>-{this.props.discount}%</span>
                    </div>
                )}
                <div className="Article__Content">
                    <span className="Article__Name">{this.props.label}</span>
                    <div>
                        <span className="Article__Price">{this.props.price-this.props.price*this.props.discount/100} €</span>
                        {this.props.discount > 0 && (
                            <span className="Article__OldPrice">{this.props.price} €</span>
                        )}
                    </div>
                    <button className="Article__Buy">Add to cart<ShoppingCart /></button>
                </div>
            </div>
        );
    }
}

export default Article;