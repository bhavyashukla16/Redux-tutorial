import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        //call action
        this.props.createPost(post);
    }

    render() {
        return (
            <div className="postForm">
            <h2 style={{color: "lavender"}}>Add Post</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label> <br />
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} autoComplete="off"/> <br />
                <label>Body:</label> <br />
                <textarea name="body" onChange={this.handleChange} value={this.state.body} /> <br />
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm)
