import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {

        const postItems = this.props.posts.map(post => 
            <div key={post.id}>
                <h3 style={{color: "lightcyan"}}>{post.title}</h3>
                <p> {post.body} </p>
            </div>
            )

        return (
            <div>
                <h2 style={{color: "lavender"}}>Posts</h2>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items, //cause we set postReducer to posts in reducer/index.js
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
