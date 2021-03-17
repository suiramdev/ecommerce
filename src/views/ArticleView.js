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
            article: [],
            cover: "",
        }

        this.changeCover = this.changeCover.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:9000/article/${this.props.id}`)
            .then(response => response.json())
            .then(data => this.setState({
                article: data[0],
                cover: data[0].covers[0],
                option: data[0].options[0]
            }));

        window.scrollTo(0, 0);
    }

    changeCover(cover) {
        this.setState({
            cover: cover
        });
    }

    chooseOption(option) {
        this.setState({
            option: option
        });
    }

    render() {
        return (
            <div className="ArticleView">
                <div className="ArticleView__Preview">
                    <div className="ArticleView__Preview-list">
                        {this.state.article.covers && this.state.article.covers.map(cover => {
                            const image = require(`images/articles/${this.props.id}/${cover}`).default;
                            return (<a onClick={() => this.changeCover(cover)} className={cover == this.state.cover && "active"}><img src={image}/></a>)
                        })}
                    </div>
                    {this.state.article.covers && (<img src={require(`images/articles/${this.props.id}/${this.state.cover}`).default}/>)}
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
                            {this.state.article.options && this.state.article.options.map(option => {
                                const image = require(`images/articles/${this.props.id}/${option}`).default;
                                return (<a className={`ArticleView__Details-btn ${option == this.state.option && "active"}`}
                                           onClick={() => this.chooseOption(option)}><img src={image}/></a>);
                            })}
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