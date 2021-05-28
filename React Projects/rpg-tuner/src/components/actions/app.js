export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";
export const DATA_UPDATE = "DATA_UPDATE";


export const fetchData = (stats) => {
    return dispatch =>{
        dispatch({
            type:FETCH_DATA
        });
        setTimeout(()=>{
            dispatch({type: DATA_SUCCESS, payload: "Payload"})
        }, 1500)
    }
}