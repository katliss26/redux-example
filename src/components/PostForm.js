import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const post ={
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPost(post)
    }
    render() {
        return (
            <div className="container">
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body: </label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
PostForm.propTypes = {
    createPost : PropTypes.func.isRequired
};

export default connect(null,{ createPost })(PostForm);
