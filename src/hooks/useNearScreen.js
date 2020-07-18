import { useEffect, useState, useRef } from 'react'


export function useNearScreen() {
    const ref = useRef(null) //the initial value is null. 
    //how can I use it? As prop in article. 
    //prop ref is a special prop that's going to allow me catch the Dom element. 
    const [show, setShow] = useState(false)
    useEffect(function () {
        console.log(ref.current) // with this I can see what elements are in the user's viewport. 
        //I am going to use intersection observer (api from web that is in window object)
        const observer = new
            window.IntersectionObserver(function (entries) {
                //this function's going to have all the entries the user's observing. 
                console.log(entries)
                const { isIntersecting } = entries[0]
                console.log(isIntersecting)

                if (isIntersecting) {
                    console.log('si')
                    setShow(true) //actualizo state.
                    //I want to update only once:
                    observer.disconnect() // once is in the viewport I disconnect the observer. 
                }

            }) // once it execute i can see the entries to know if its in the viewport or not. 
        observer.observe(ref.current) // I pass the element i want to observe. 
    }, [ref]) //only when it change the reference.now i got the elements (objects) 

    return [show, ref]
}