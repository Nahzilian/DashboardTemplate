export const login = (res) => {
    const token = res.token;
    const user = res.user;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuth', JSON.stringify(true));
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuth');
}

export const loginErrorHandler = (error, callback) => {
    if(error.response) {
        if(error.response.status === 400) {
            callback('Username or password is not correct, please try again!');
        } else if (error.response.status === 500) {
            callback('Something went wrong, please try again later');
        } else if (error.response.status === 404) {
            callback('User does not exist! Please sign up a new account')
        }
    }else {
        callback('Something went wrong, please try again later');
    }
}