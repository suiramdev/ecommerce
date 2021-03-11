import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import './ArticleView.scss';
import Placeholder from 'images/placeholder.png';
import {Favorite, ShoppingCart} from "@material-ui/icons";
import Cookies from 'universal-cookie';

class ArticleView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:9000/article/${this.props.id}`)
            .then(response => response.json())
            .then(data => this.setState({article: data[0]}));

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="ArticleView">
                <div className="ArticleView__Preview">
                    <div className="ArticleView__Preview-list">
                        <a><img src={Placeholder}/></a>
                        <a><img src={Placeholder}/></a>
                        <a><img src={Placeholder}/></a>
                    </div>
                    <img src={Placeholder}/>
                </div>
                <div className="ArticleView__Details">
                    <h1>{this.state.article.name}</h1>
                    <p>{this.state.article.sales} sales</p>
                    <div>
                        <h2>Description</h2>
                        <p>{this.state.article.description}</p>
                    </div>
                    <div>
                        <h2>Choose a detail</h2>
                        <div className="ArticleView-row">
                            <a className="ArticleView__Details-btn active"><img src={Placeholder}/></a>
                            <a className="ArticleView__Details-btn"><img src={Placeholder}/></a>
                            <a className="ArticleView__Details-btn"><img src={Placeholder}/></a>
                            <a className="ArticleView__Details-btn"><img src={Placeholder}/></a>
                        </div>
                    </div>
                    <div>
                        <span className="ArticleView__Details-price">{(this.state.article.price-this.state.article.price*this.state.article.discount/100).toFixed(2)} €</span>
                        {this.state.article.discount > 0 && (
                            <span className="ArticleView__Details-oldPrice">{this.state.article.price} €</span>
                        )}
                    </div>
                    <div>
                        <div className="ArticleView-row">
                            <button className="ArticleView__Buy">Add to cart<ShoppingCart /></button>
                            <button className="ArticleView__Like"><Favorite/></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (props) => {
    const { id } = useParams();
    const cookies = new Cookies();
    let viewedArticles = cookies.get("viewedArticles") || [];
    if (!viewedArticles.includes(id)) viewedArticles.push(id);
    if (viewedArticles.length > 5) viewedArticles.splice(0, 1);
    cookies.set("viewedArticles", viewedArticles, { path: "/" });

    return <ArticleView {...props} id={id} />
};