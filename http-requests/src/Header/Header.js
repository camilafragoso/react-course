import React from 'react';
import {Link} from "react-router-dom";
import '../Header/Header.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Your Posts</Link>
                </li>
                <li>
                    <Link to="/posts">Fetched Posts</Link>
                </li>
                <li>
                    <Link to="/new-post">New Post</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;