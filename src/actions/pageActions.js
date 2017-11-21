import { TARGET_CLICK, TICK } from '../constants/page'

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

