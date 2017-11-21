import { LEVELUP_UPGRADE, EXTEND_UPGRADE } from '../constants/page'

export function levelupUpgrade(id) {
    return {
        type: LEVELUP_UPGRADE,
        id: id
    }
}

export function extendUpgrade(id) {
    return {
        type: EXTEND_UPGRADE,
        id: id
    }
}