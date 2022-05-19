import { bindActionCreators } from "@reduxjs/toolkit";

export default function reducer(state ={ text: ''}, action){
    switch(action.type){
        case "SEARCH_INPUT":
            return {
                ...state,
                text: action.payload.text
            }

            
    }
    return state;
}