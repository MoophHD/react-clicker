let initialState = {
    score: 0,
    stats: {
        perClick: 10,
        perTick: 1
    },
    upgrades: {
        byid: {
            0: {
                name: 'test',
                type: 'perClickBonus',
                value: 1,
                extendCost: 25,
                levelUpCost: 2500,
                level: 0,
                extendsCount: 0
            }
        },
        ids: [0]
    },
    modifiers: {
        perClickConst: 10,
        perTickConst: 1,
        perClickBonus: 0,
        perTickBonus: 0,
        modClick: 1,
        modTick: 1
    }
}   

import { TARGET_CLICK,
         TICK, 
         EXTEND_UPGRADE,
         LEVELUP_UPGRADE, 
         SET_MODIFIERS} from '../constants/page'

const levelUpCostMod = 1.5;
const extendCostMod = 1.05;

const levelUpValMod = 1.5;

let val, id, upgrade, price;

export default function page(state=initialState, action) {
    switch (action.type) {
        case SET_MODIFIERS:
            let { perClickBonus, perTickBonus, modClick, modTick } = action.payload;
            
            let perClick = ( state.modifiers.perClickConst + perClickBonus ) * modClick;
            let perTick = ( state.modifiers.perTickConst + perTickBonus ) * modTick;

            
            return {...state, stats: {
                perClick: perClick,
                perTick: perTick
            }, modifiers: {...state.modifiers, perClickBonus: perClickBonus, perTickBonus: perTickBonus, modTick: modTick, modClick: modClick}}
        case TARGET_CLICK:
            val = state.stats.perClick;
            return {...state, score: state.score + val}
        case TICK:
            val = state.stats.perTick;
            return {...state, score: state.score + val}
        case EXTEND_UPGRADE:
            id = action.id;
            upgrade = {...state.upgrades.byid[id]};

            price = upgrade.extendCost;

            upgrade.extendsCount++;
            upgrade.extendCost*=extendCostMod;
            upgrade.value
            return (
                {...state,
                    score: state.score - price,
                    upgrades: {
                        ids: [...state.upgrades.ids],
                        byid: {
                            ...state.upgrades.byid,
                            [id]: upgrade
                        }
                }})
        case LEVELUP_UPGRADE:
            id = action.id;
            upgrade = {...state.upgrades.byid[id]};

            price = upgrade.levelUpCost;
            
            upgrade.level++;
            upgrade.levelUpCost*=levelUpCostMod;
            upgrade.extendCost*=levelUpCostMod;
            upgrade.value*=levelUpValMod;

            
            return (
            {...state, 
                score: state.score - price,
                upgrades: {
                    ids: [...state.upgrades.ids],
                    byid: {
                        ...state.upgrades.byid,
                        [id]: upgrade
                    }
            }})
        default:
            return state
    }
}


