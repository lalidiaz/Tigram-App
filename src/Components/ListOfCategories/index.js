import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';


//I create a function // a custom hook. // This function will fetch the data. 
function useCategoriesData(){
    const [categories, setCategories] = useState([])
    //because is a custom hook I can add more states.
    const [loading, setLoading ] = useState(false)

    useEffect(function () {
        setLoading(true) // before I fetch the data 
        window.fetch('https://petgram-server-24iykciv5.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    }, []) //If i want to execute only one time i need to add an empty[].

    //a Hook must return something:will return an object with the property categories. 
    return{ categories, loading }
}



export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)



    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    })


    const renderList = (fixed) => (
        <List fixed={fixed} >
             {/* I do a ternary operator to display something in the screen while waiting to fetch the data  */}
            {
                loading ? <Item key={loading}><Category /></Item>
            : categories.map(category => <Item key={category.id}><Category cover={category.cover} emoji={category.emoji} path={`/pet/${category.id}`}/></Item>)//I also can use the rest operator {...category} to bring all the categories)
            }
        </List>
    )

    if (loading) {
        return "Loading..."
    }

    return (
        <React.Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </React.Fragment>

    )
}