import React, {useCallback, useContext, useMemo, useState} from 'react';
import {ThemeCreteContext} from "../../App";

const ThemeButton = () => {
    const ThemeContext = useContext(ThemeCreteContext)
    const {theme, setTheme} = ThemeContext
    const handleToggle = useCallback(() => {
        setTheme(!theme)
    }, [theme]);
    return (
        <div onClick={handleToggle} className={`ThemeButton`}>
           <span className={'active_btn'}/>
        </div>
    );
};

export default ThemeButton;