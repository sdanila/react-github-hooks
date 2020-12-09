import { SET_LOADING, GET_REPOS, GET_USER, SEARCH_USERS, CLEAR_USERS } from '../types';

const handlers = {
    [SET_LOADING]: state => ({...state, loading: true}),
    [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
    [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
    [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [CLEAR_USERS]: state => ({...state, users: []})
}

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
}