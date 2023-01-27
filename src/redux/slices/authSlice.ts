import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthState, User } from '../../types/types'
import { getStateFromLS } from '../../utils/getStateFromLS'

export const fetchUsers = createAsyncThunk(

    'auth/fetchUsers',
    async () => {
        const {data} = await axios.get<User[]>('./users.json')
        return data
    }
)

const {isAuth, user} = getStateFromLS()

const initialState: AuthState = {
    isAuth: !!isAuth || false,
    users: [],
    user: user || '',
    errorText: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    formSubmit(state :AuthState , action:PayloadAction<User>){
        const {username, password} = action.payload
        const findUser = state.users.find(user => user.username === username && user.password === password)
        if(findUser){
            state.isAuth = true
            localStorage.setItem("isAuth", 'true')
            state.user = findUser.username
            localStorage.setItem("user", findUser.username)
        } else {
            state.errorText = 'userName or password is not correct'
        }
    },
    clearErrorText(state){
        state.errorText = ''
    },
    onLeaveClick(state){
        state.isAuth = false
        state.user = ''
        localStorage.removeItem('isAuth')
        localStorage.removeItem('user')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state:AuthState, action:PayloadAction<any>) => {
        state.users = [...action.payload]
    })
  },
})

export const {formSubmit, clearErrorText, onLeaveClick} = authSlice.actions

export default authSlice.reducer