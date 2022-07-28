export interface dataType{
    id: Number,
    userId:Number,
    title: string,
    body: string
}

export enum DataActionTypes{
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',

    SORTED_DATA_SUCCESS = 'SORTERED_DATA_SUCCESS',
    SORTED_DATA_ERROR = 'SORTERED_DATA_ERROR'
}


export interface DataState{
    data: any;
    loading:boolean;
    error: null | string;
}
export const initialState:DataState = {
    data: [],
    loading: false,
    error:null
}

interface FetchDataAction{
    type:DataActionTypes.FETCH_DATA,
}
interface FetchDataSuccessAction{
    type:DataActionTypes.FETCH_DATA_SUCCESS,
    payload: any[]
}
interface FetchDataErrorAction{
    type:DataActionTypes.FETCH_DATA_ERROR,
    payload:string
}   


interface SortedDataActionSuccess{
    type:DataActionTypes.SORTED_DATA_SUCCESS,
    payload:dataType[]
}
interface SortedDataActionError{
    type:DataActionTypes.SORTED_DATA_ERROR,
    payload:string
}


export type DataAction = FetchDataAction | FetchDataErrorAction | FetchDataSuccessAction |
                         SortedDataActionSuccess | SortedDataActionError


export interface dataTypeList extends Array<dataType>{}


