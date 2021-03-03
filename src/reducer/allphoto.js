// import action types here
const { ERROR, LOADING, INIT, GETTEN } = require('./../action/actiontypes')

const initialstate = {
    initialised: false,
    loaded: false,
    photos: []
}

const func = function(state = initialstate, action){
    // match to action type and return the state
    switch(action.type){
        case INIT:
            return{
                ...state,
                initialised: true,
                photos: action.data,
                loaded: true
            }
        case LOADING:
            return{
                ...state,
                loaded: false
            }
        case GETTEN:
            return{
                ...state, 
                photos: [...state.photos, ...action.data], loaded: true
            }
        case ERROR:
            return {
                ...state, 
                error: action.data,
                loaded: false
            }
        default:
            return state;
    }
}

export default func