import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    user : null ,
    loading : false ,
    error : false
}

const userSlice = createSlice({
    name : 'user' ,
    initialState ,
    reducers : {
        loginStart : (state) => {
            state.loading = true
        } ,
        loginSuccess : (state , action) => {
            state.loading = false;
            state.user = action.payload;
        } ,
        loginFailure : (state) => {
            state.loading = false;
            state.error = true;
        } ,
        logout : (state) => {
            state.user = null 
            state.loading = false
            state.error = false
        }
    }
})

export const {loginStart , loginSuccess , loginFailure , logout} = userSlice.actions
export default userSlice.reducer
