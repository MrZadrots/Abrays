import { initialState,DataAction,DataState,DataActionTypes } from "../../types/types";


export const dataReducer = (state = initialState, action:DataAction): DataState =>{
    switch (action.type){
        case DataActionTypes.FETCH_DATA:
            return {loading:true, error:null, data: []};
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {loading:false, error:null, data: action.payload};
        case DataActionTypes.FETCH_DATA_ERROR:
            return {loading:false, error:action.payload, data: []};  
        
        case DataActionTypes.SORTED_DATA_SUCCESS:
            return {loading:false, error:null, data: action.payload}
        case DataActionTypes.SORTED_DATA_ERROR:
            return {loading:false, error:action.payload, data: []}


        default:
            return state
    }

}