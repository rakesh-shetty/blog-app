const postsInitialState = [
    // { id: 1, name: 'joey', email: 'joey@gmail.com' },
    // { id: 2, name: 'chandler', email: 'chandler@gmail.com' },
    // { id: 3, name: 'rachel', email: 'rachel@gmail.com' }
]

const usersReducer = (state = postsInitialState, action) => {
    switch (action.type) {
        default: {
            return [...state]
        }
    }
}

export default usersReducer