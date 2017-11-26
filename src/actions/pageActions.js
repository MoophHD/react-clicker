import { TARGET_CLICK, TICK, SET_MODIFIERS } from '../constants/page'

export function targetClick() {
    return {
        type: TARGET_CLICK
    }
}

export function tick() {
    return {
        type: TICK
    }
}

export function setModifiers(obj) {
    return {
        type: SET_MODIFIERS,
        payload: obj
    }
}
