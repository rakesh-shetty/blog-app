export function setPosts(posts) {
    return { type: 'SET_POSTS', payload: posts }
}
export function startGetPosts() {
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const postsData = response.data
                const posts = {
                    posts: postsData,
                    isLoading: false
                }
                dispatch(setPosts(posts))
            })
            .catch(err => {
                dispatch(setPosts(err))
            })
    }
}