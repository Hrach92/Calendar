import { LMBOPEN, RMBOPEN } from "../types"

export const leftMenuBarOpen = async (dispatch,left) =>{
    try{
        dispatch({
            type:LMBOPEN,
            left:left
        })
    }
    catch (error){
        dispatch({
            type:GET_SAMPLE_ERROR,
            payload:'some error'
        })
    }
}
export const rightMenuBarOpen = async (dispatch,right) =>{
    try{
        dispatch({
            type:RMBOPEN,
            right:right
        })
    }
    catch (error){
        dispatch({
            type:GET_SAMPLE_ERROR,
            payload:'some error'
        })
    }
}