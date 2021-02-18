import React, {Component} from 'react';
import './Footer.scss';
import {Instagram, RssFeed, Twitter} from "@material-ui/icons";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a>Legal mentions</a>
                <a>Terms of services</a>
                <a>Privacy policy</a>
                <a>Reviews</a>
                <a>Control my cookies</a>
            </div>
        );
    }
}

export default Footer;