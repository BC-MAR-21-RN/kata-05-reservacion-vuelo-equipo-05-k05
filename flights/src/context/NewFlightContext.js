import React, {createContext, useState} from 'react';

export const NewFlightContext = createContext();

export const NewFlightProvider = ({children}) => {

   

    return(
        <NewFlightContext.Provider
        value={{

        }}
        >
            {children}
        </NewFlightContext.Provider>
    )
}