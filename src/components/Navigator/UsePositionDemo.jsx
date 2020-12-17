import React from 'react';
import {usePosition} from './usePosition';
export const UsePositionDemo = ({watch, settings}) => {
    const {
        latitude,
        longitude,
        error,
    } = usePosition(watch, settings);
//f377d5d9a56070455130d7eb6766510d839f7e53
    return (
        <>
        </>
    );
};