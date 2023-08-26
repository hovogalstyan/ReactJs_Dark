import React, {useContext, useMemo} from 'react';
import {BeatLoader} from "react-spinners";
import {ThemeCreteContext} from "../App";

const IsLoading = () => {
    const ThemeContext = useContext(ThemeCreteContext);
    const {theme} = ThemeContext
    const activeColor = useMemo(() => {
        return theme ?  "#fff" : "#36d7b7"
    }, [theme])
    return (
        <div className={'is_loading'}>
            <BeatLoader size={30} color={activeColor}/>
        </div>
    );
};

export default IsLoading;