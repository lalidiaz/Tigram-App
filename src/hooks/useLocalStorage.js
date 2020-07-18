import {useState} from 'react'


export function useLocalStorage (key, initialValue) {
    const [storedValue, setValue] = useState(() => {
        //this function return the value we want as initial value.
        try{
            const item = window.localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialValue
        } catch(e) {
            return initialValue
        }
    }) //this is to inicializar the state.

      //to keep the liked even if I refresh
      const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value)) 
            setValue(value)
        } catch (e) {
            console.error(e)
        }
    }

return [storedValue, setLocalStorage] // it's going to return 2 values. 1st the value I got stored and 2nd a way to update a value. 
}
