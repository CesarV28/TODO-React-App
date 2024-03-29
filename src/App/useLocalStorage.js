import React from "react";


function useLocalStorage (itemName, initialValue) {

    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [ loading, setLoading ] = React.useState(true);
    const [ loadError, setloadError ] = React.useState(false);
    const [ item, setItem ] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
  
        try {
          const localStorageItem = localStorage.getItem( itemName );
  
          let parsedItem;
  
          if(!localStorageItem){
            localStorage.setItem( itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true)
        } catch (error) {
          setloadError(error);
        }
  
      }, 1000);
    }, [sincronizedItem])
  
      // Funcion que guarda un nuevo array de todos
      const saveItem = (newItem) => {
        try {
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem( itemName, stringifiedItem );
          setItem(newItem);
        } catch (error) {
          setloadError(error);
        }
      }

      const sincronizeItem = () => {
        setLoading(true);
        setSincronizedItem(false);
      };
  
      return {
        item, 
        saveItem,
        loading,
        loadError, 
        sincronizeItem,
    };
  }

export { useLocalStorage };