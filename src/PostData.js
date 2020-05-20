import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom'

class PostData extends React.Component {
    constructor() {
        super()
        this.state = {
            post: {},
            user: {},
            comments: []
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.postId

        axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
            const post = response.data
            const userURL = `http://jsonplaceholder.typicode.com/users/${post.userId}`
            const commentsURL = `http://jsonplaceholder.typicode.com/comments?postId=${postId}`

            Promise.all([axios.get(userURL), axios.get(commentsURL)])
            .then(responses => {
                const user = responses[0].data
                console.log(user)
                const comments = responses[1].data 
                this.setState({ post, user, comments })    
            })
        })
    }

    render() {
        return (
            <div>
                <h3>USER NAME : {this.state.user.name} </h3>
                <h3>TITLE : {this.state.post.title}</h3>
                <h4>BODY : </h4><p>{this.state.post.body}</p><hr/>
                <h3>COMMENTS</h3>
                <ul>
                    {
                        this.state.comments.map(comment => {
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul><hr/>
                <p><Link to={this.state.user.id ? `/users/${this.state.user.id}` : '' } >More posts of author: {this.state.user.name}</Link></p>
            </div>
        )
    }
}

export default PostData