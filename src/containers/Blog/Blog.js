import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from '../NewPost/NewPost'

import './Blog.css';

class Blog extends Component {
    // state = {
    //     posts: [],
    //     selectedPostID: null,
    //     error: false
    // }
    // componentDidMount() {
    //     axios.get('/posts')
    //         .then(response => {
    //             const posts = response.data.slice(0, 4);
    //             const alterdPost = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Abhishek'
    //                 }
    //             })
    //             this.setState({ posts: alterdPost })
    //             //console.log(response);
    //         }).catch(e => {
    //             this.setState({ error: true });
    //         })
    // }

    // clickPostHandler = (postId) => {
    //     this.setState({ selectedPostID: postId })
    //     console.log(postId)
    // }

    render() {
        // let posts = <p style={{ textAlign: 'center' }}>Somthing went wrong</p>
        // if (!this.state.error) {
        //     posts = this.state.posts.map(post => {
        //         return <Post
        //             key={post.id}
        //             title={post.title}
        //             author={post.author}
        //             clickPost={() => this.clickPostHandler(post.id)} />
        //     });
        // }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New-Post</Link></li>
                            {/* we can add to= {{
                                pathname:'/new-post',
                                hash:'#div',
                                search:'?quick-submit=true'
                            }} */}
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />

            </div>
        );
    }
}

export default Blog;