import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chatId: 1,
    dialog: [],
    currentMessage: ''
}

export const currentChat = createSlice({
    name: 'currentChat',
    initialState,
    reducers: {
        editMessage: (state, action) => {
            state.currentMessage = action.payload
        },
        addMessage: (state, action) => {
            state.dialog.push(action.payload)
        }
    }
})

export const {editMessage, addMessage} = currentChat.actions

export default currentChat.reducer