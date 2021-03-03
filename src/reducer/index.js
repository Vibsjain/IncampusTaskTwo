import {combineReducers} from 'redux'
import allPhoto from './allphoto'
import page from './page'
import yvalue from './yvalue'
import fullfolder from './fullfolder'

export default combineReducers({
    photo: allPhoto,
    page,
    yvalue,
    allPhoto: fullfolder
})