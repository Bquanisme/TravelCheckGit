import type { Dispatch } from "@reduxjs/toolkit";
import { API_FAIL, API_GET_EXAMPLE, API_REQUEST } from "../common/constant";
import { getApiExample } from "../../../service/example";

export const getApi = () => async (dispatch: Dispatch) => {
    dispatch({ type: API_REQUEST });
    try {
        const data = await getApiExample();
        dispatch({
            type: API_GET_EXAMPLE,
            data: data.data,
        });
    } catch (error : any) {
        dispatch({
            type: API_FAIL,
            error: error.message,
        });
    }
};

