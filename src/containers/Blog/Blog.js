import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostID: null,
        error: false
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                this.setState({ error: true });
            })
    }

    clickPostHandler = (postId) => {
        this.setState({ selectedPostID: postId })
        console.log(postId)
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;