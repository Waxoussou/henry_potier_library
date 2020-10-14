import React, { useReducer } from "react";
import InfoContext from './infoContext';
import infoReducer from './infoReducer';

import ACTIONS from '../actionsType';

const InfoState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(infoReducer, initialState);

    const setInfo = (message, type, timeout = 5000) => {
        const id = Math.random().toString(36).substring(7);
        dispatch({ type: ACTIONS.SET_INFO, payload: { id, message, type } })

        setTimeout(() => {
            dispatch({ type: ACTIONS.REMOVE_INFO })
        }, timeout);
    }


    return (
        <InfoContext.Provider
            value={{
                messages: state,
                setInfo
            }}>
            {props.children}
        </InfoContext.Provider>
    );

}

export default InfoState;