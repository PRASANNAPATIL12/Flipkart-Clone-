import { createContext, useState } from "react";

//its a context
export const DataContext=createContext(null);


//its a component
const DataProvider=({children})=>{
        const[acc,setAcc]=useState('');

        return (
            <DataContext.Provider value={{
                acc,setAcc
            }}  >

                {children}
            </DataContext.Provider>
        )
}

export default DataProvider;