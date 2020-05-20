import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import UserList from './Users'
import UserData from './UserData'
import PostData from './PostData'
import Posts from './Posts'

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1> Blogger App </h1>

                <Link to="/" >Home</Link> |
                <Link to="/users" >Users</Link> |
                <Link to="/posts" >Posts</Link>

                <Route path="/users" component={UserList} exact={true} />
                <Route path="/users/:userId" component={UserData} />
                <Route path="/posts/:postId" component={PostData} />
                <Route path="/posts" component={Posts} exact={true}/>
            </div>
        </BrowserRouter>
    )
}

export default App