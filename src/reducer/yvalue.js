// import action types here
const { GETY } = require('./../action/actiontypes')

const initialstate = {
    value: 0
}

const func = function(state = initialstate, action){
    // match to action type and return the state
    switch(action.type){
        case GETY:
            return{
                ...state, value: action.data
            }
        default:
            return state;
    }
}

export default func