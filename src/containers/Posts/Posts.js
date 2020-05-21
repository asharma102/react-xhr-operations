import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        // selectedPostID: null,
        // error: false
    }
    clickPostHandler = (postId) => {
        this.setState({ selectedPostID: postId })
        console.log(postId)
    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const alterdPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Abhishek'
                    }
                })
                this.setState({ posts: alterdPost })
                //console.log(response);
            }).catch(e => {
                console.log(e);
                //this.setState({ error: true });
            })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Somthing went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clickPost={() => this.clickPostHandler(post.id)} />
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;