import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import { Route, NavLink, Redirect } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

import './Blog.css';

class Blog extends Component {


    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact

                            >Posts</NavLink></li>
                            <li><NavLink to="/new-post"
                                activeClassName="active"
                                activeStyle={{
                                    textDecoration: 'underline'
                                }}>New-Post</NavLink></li>
                            {/* we can add to= {{
                                pathname:'/new-post',
                                hash:'#div',
                                search:'?quick-submit=true'
                            }} */}
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <switch>

                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </switch>

            </div>
        );
    }
}

export default Blog;