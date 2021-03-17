import React, {Component} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Header.scss';
import {ArrowDropDown, Close, LocalShipping, Lock, Search, ShoppingBasket, ViewHeadline} from "@material-ui/icons";
import flagFR from 'images/flags/fr-FR.svg';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }

        this.onSearchChange = this.onSearchChange.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }

    onSearchChange(event) {
        this.setState({
            search: event.target.value
        })
    }

    submitSearch() {
        if (this.state.search.length <= 0) return;

        this.props.history.push(`/articles?search=${this.state.search}`);
    }

    displayMenu() {
        document.querySelector(".Menu").classList.toggle("display");
    }

    render() {
        return (
            <>
                <div className="Header">
                    <div className="Header__Sub">
                        <div className="Header-start">
                            <span><Lock />Safe and secure</span>
                            <span><LocalShipping />Fast shipping</span>
                        </div>
                        <div className="Header-end">
                            <span><img src={flagFR} />France<ArrowDropDown /></span>
                        </div>
                    </div>
                    <div className="Header__Main">
                        <div className="Header-start">
                            <a onClick={this.displayMenu}><ViewHeadline style={{marginRight: "0.5rem"}}/></a>
                            <Link className="Header__Main-title" to="/">siomazone</Link>
                        </div>
                        <div className="Header-end">
                            <div className="Header__Main__Search">
                                <button onClick={this.submitSearch} className="Header__Main__Search-submit"><Search /></button>
                                <input type="text" placeholder="Search for an article, a brand..."
                                       onChange={this.onSearchChange} onSubmit={this.submitSearch}/>
                            </div>
                            <div className="Header__Main__Cart"><ShoppingBasket /></div>
                            <div className="Header__Main__Profile">
                                <h1>Hello again,</h1>
                                <h2>Marius !</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Menu">
                    <div className="Menu__Header">
                        <h1>Categories</h1>
                        <a className="Menu__Header-close" onClick={this.displayMenu}><Close/></a>
                    </div>

                    <div className="Menu__Header">
                        <h1>Test</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default (props) => {
    return <Header {...props} history={useHistory()}/>;
};