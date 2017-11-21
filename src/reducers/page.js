let initialState = {
    score: 0,
    stats: {
        perClick: 10,
        perTick: 1,
        clickMod: 1,
        tickMod: 1
    },
    upgrades: {
        byid: {
            0: {
                name: 'test',
                type: 'perTick',
                value: 1,
                extendCost: 25,
                levelUpCost: 5000,
                level: 0,
                size: 0
            }
        },
        ids: [0, 1, 2]
    }
}   

import { TARGET_CLICK,
         TICK, 
         EXTEND_UPGRADE,
         LEVELUP_UPGRADE } from '../constants/page'

const levelUpCostMod = 1.5;
const extendCostMod = 1.05;

const levelUpValMod = 3;

let val, id, upgrade, price;

export default function page(state=initialState, action) {
    switch (action.type) {
        case TARGET_CLICK:
            val = state.stats.perClick * state.stats.clickMod;
            return {...state, score: state.score + val}
        case TICK:
            val = state.stats.perTick * state.stats.tickMod;
            return {...state, score: state.score + val}
        case EXTEND_UPGRADE:
            id = action.id;
            upgrade = {...state.upgrades.byid[id]};

            price = upgrade.extendCost;

            upgrade.size++;
            upgrade.extendCost*=extendCostMod;

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


