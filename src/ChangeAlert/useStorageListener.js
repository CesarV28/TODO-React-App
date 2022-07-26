import { useState } from 'react'

export const useStorageListener = (sincronize) => {

    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
        if(change.key === 'TODOS_RV01'){
            console.log('Hubo cambios')
            setStorageChange(true);
        }   
    });

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    }

    return {
        show: storageChange,
        toggleShow,
    } 
}


