import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [allData, setAllData] = useState();
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const info = {
        allData,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;