import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: null,
    userName: null,
    userSubscriptions: []
}

export const currentUser = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUserId(state, data) {
            state.userId = data.payload
        },
        setUserName(state, data) {
            state.userName = data.payload
        },
        clearUserData(state) {
            state.userId = null,
            state.userName = null,
            state.userSubscriptions = []
        },
        setSubscriptions(state, data) {
            state.userSubscriptions = data.payload
        },
        addSubscription(state, data) {
            state.userSubscriptions.push(data.payload)
        },
        deleteSubscription(state, data) {
            state.userSubscriptions = state.userSubscriptions.filter(id => id !== data.payload)
        }
    }
})

export const {setUserId, setUserName, clearUserData, setSubscriptions, addSubscription, deleteSubscription} = currentUser.actions

export default currentUser.reducer