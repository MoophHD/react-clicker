import {TARGET_CLICK} from '../constants/page'

export function targetClick(val) {
    return {
        type: TARGET_CLICK,
        payload: val
    }
}