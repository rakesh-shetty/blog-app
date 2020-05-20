import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserData extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            posts: []
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            const user = response.data
            this.setState({ user })
        })
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => {
            const posts = response.data
            this.setState({ posts })
        })
    }

    render() {
        return (
            <div>
                <h2> USERNAME : {this.state.user.name} </h2>
                <h3> POSTS WRITTEN BY USER </h3>
                <ul>
                    {
                        this.state.posts.map(post => {
                            return <li key={post.id} > <Link to={`/posts/${post.id}`}>{post.title}</Link> </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserData