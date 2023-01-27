export const getStateFromLS = () =>{
    const isAuth = localStorage.getItem('isAuth')
    const user = localStorage.getItem('user')
    return {isAuth, user}
}