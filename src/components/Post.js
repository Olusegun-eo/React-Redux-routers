import React, {Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Post extends Component {
  // state = {
  //   post: null
  // }
  // componentDidMount () {
  //   console.log(this.props);
  //   let id= this.props.match.params.post_id;
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //   .then( res => {
  //     // console.log(res);
  //     this.setState({
  //       post: res.data
  //     })
  //     // console.log(res);
  //   })
  // }
  handleClick = () => {
    console.log(this.props)
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/')
  }
  render () {
    console.log(this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete post</button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return (
      <div className="container">
      {post}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  // let id = Number(ownProps.match.params.post_id); u can use this
  // Then return this,->return {post: state.posts.find( post => post.id ===id)}
  let id = ownProps.match.params.post_id;
  return {
    // post: state.posts.find( post => post.id ===id) OR
    post: state.posts.find(post => String(post.id) === String(id))
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deletePost: (id) => {dispatch({type: "DELETE_POST", id: id})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);


 