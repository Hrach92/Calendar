import { GET_MONTH, GET_DATA_ERROR,GET_SAMPLE_ERROR, GET_YEAR } from "../types";

export const getMonth = async (dispatch,date) =>{
    try{
        dispatch({
            type:GET_MONTH,
            date
        })
    }
    catch (error){
        dispatch({
            type:GET_SAMPLE_ERROR,
            payload:'some error'
        })
    }
}
export const getYear = async (dispatch,year) =>{
    try{
        dispatch({
            type:GET_YEAR,
            year
        })
    }
    catch {
        dispatch({
            type:GET_DATA_ERROR
        })
    }
}