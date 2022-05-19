
import *  as actions from  './actionTypes';


export const searchInput = text =>({
    type: "SEARCH_INPUT",
    payload:{
        text
    }
})