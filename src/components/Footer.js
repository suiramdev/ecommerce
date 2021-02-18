import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import {Instagram, RssFeed, Twitter} from "@material-ui/icons";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a>Legal mentions</a>
                <a>Terms of services</a>
                <Link to="/privacy">Privacy policy</Link>
                <a>Reviews</a>
                <a>Control my cookies</a>
            </div>
        );
    }
}

export default Footer;