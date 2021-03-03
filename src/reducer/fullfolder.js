// import action types here
const { GETALL, LOADINGALL } = require('./../action/actiontypes')

const initialstate = {
    allphoto: [],
    loadedall: false
}

const func = function(state = initialstate, action){
    // match to action type and return the state
    switch(action.type){
        case GETALL:
            return{
                ...state,
                allphoto: action.data,
                loadedall: true
            }
        case LOADINGALL:
            return{
                ...state,
                loadedall: false
            }
        default:
            return state;
    }
}

export default func