import {createContext, useMemo, useState} from "react";
import Header from "./components/header/Header";
import Photos from "./components/Photos/Photos";

export const ThemeCreteContext = createContext(null)

function App() {
    const [theme, setTheme] = useState(false);
    const activeClassApp = useMemo(() => {
        return theme ? 'active' : ''
    }, [theme])
    return (
        <div className={`App ${activeClassApp}`}>
            <ThemeCreteContext.Provider value={{
                theme,
                setTheme
            }}>
                <Header/>
                <Photos/>
            </ThemeCreteContext.Provider>
        </div>
    );
}

export default App;
