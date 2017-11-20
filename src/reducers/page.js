let initialState = {
    score: 0,
    stats: {
        perClick: 10,
        perSec: 1,
        clickMod: 1
    }
}

import { TARGET_CLICK } from '../constants/page'

export default function page(state=initialState, action) {
    switch (action.type) {
        case TARGET_CLICK:
            return {...state, score: state.score+action.payload}
        default:
            return state
    }
}