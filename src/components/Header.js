import React, {Component} from 'react';
import './Header.scss';
import {ArrowDropDown, LocalShipping, Lock, Search, ShoppingBasket} from "@material-ui/icons";
import flagFR from 'images/flags/fr-FR.svg';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                        <h1>сука блиат</h1>
                    </div>
                    <div className="Header-end">
                        <div className="Header__Main__Search">
                            <button className="Header__Main__Search-submit"><Search /></button>
                            <input type="text" placeholder="Search for an article, a brand..." />
                        </div>
                        <div className="Header__Main__Cart"><ShoppingBasket /></div>
                        <div className="Header__Main__Profile">
                            <h1>Hello again,</h1>
                            <h2>Marius !</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;