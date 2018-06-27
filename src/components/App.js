import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Post from './Post/Post'
import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts') .then(results => {
      this.setState ({posts: results.data})
    })
  }
  // that arrow function is the same as function (results) {
      //this.setState ({posts: results.data})

  updatePost(id, text) {
    axios.put (`https://practiceapi.devmountain.com/api/?id=${id}`,{
      text: text
    })
  }
  
  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;
    // console.log(posts);
    // let mappedPosts = posts.map((e) => {
    //   console.log(e);
    //   return <Post key = {e.id}/>
    // })
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {
            posts.map( post => (
              <Post key={ post.id }
              text = {post.text}
              date = {post.date}
              id = {post.id}
              updatePostFn = {this.updatePost}
               />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
