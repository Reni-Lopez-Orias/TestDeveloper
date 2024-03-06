import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const initialContext = {
    isAuth: false,
    user: null,
    openModal: false,
    loading: false,
    todos: [],
    msg_error: '',
    msg_success: ''
}

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(initialContext);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);