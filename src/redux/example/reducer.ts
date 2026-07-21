import type { userActionTypes } from "./common/constant";
import { API_GET_EXAMPLE, API_FAIL, API_REQUEST } from "./common/constant";

interface exampleState  {
    loading: boolean,
    data: any,
    error?: string
}

const initialState : exampleState = {
    loading: false,
    data: {},
    error: undefined
};

export default function exampleReducer(
    state = initialState,
    action: userActionTypes,
    
) : exampleState{
    switch (action.type) {
        case API_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case API_GET_EXAMPLE:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case API_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
