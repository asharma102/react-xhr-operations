import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        //this.setState({ selectedPostID: postId })
        console.log(this.props)
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
                return (<Link key={post.id}
                    to={'/' + post.id}
                >
                    <Post
                        title={post.title}
                        author={post.author}
                        clickPost={() => this.clickPostHandler(post.id)} />
                </Link>)
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