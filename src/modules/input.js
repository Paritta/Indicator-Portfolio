import { createAction, handleActions } from 'redux-actions'

const SET_INDICATOR = 'input/SET_INDICATOR';

export const setIndicator = createAction(SET_INDICATOR);

const initialState = {
    indicator: 0
} 

export default handleActions({
    [SET_INDICATOR]: (state, action) => state.set('inicator', action.payload)
}, initialState)