import React, { createContext, useEffect, useState } from 'react';
import useServices from '../../customHooks/UseService';

export const AllContext = createContext();

const ContextProvider = ({ children }) => {


    return (
        <div>
            <AllContext.Provider>
                {children}
            </AllContext.Provider>
        </div>
    );
};

export default ContextProvider;