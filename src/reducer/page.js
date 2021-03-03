// import action types here
const { INC_PAGE } = require('./../action/actiontypes')

const initialstate = {
    page: 1
}

const func = function(state = initialstate, action){
    // match to action type and return the state
    switch(action.type){
        case INC_PAGE:
            return{
                ...state, page: action.data
            }
        default:
            return state;
    }
}

export default func