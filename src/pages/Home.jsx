import React from 'react';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";
 

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: "popular" },
    { name: 'цене', type: "price" },
    { name: 'алфавиту', type: "alphabet" }
]


function Home() {
    const dispatch = useDispatch()
    const {items, isLoaded} = useSelector(({ pizzas }) => pizzas)
    const {category, sortBy} = useSelector(({ filters }) => filters)

    
    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [category, sortBy])


    const onSelectCategory = React.useCallback((category) => {
        dispatch(setCategory(category))
    }, [])


    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])



    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames} 
                    activeCategory={category}
                    onClickItem={onSelectCategory} />
                <SortPopup 
                    items={sortItems} 
                    activeSortType={sortBy} 
                    onSelectSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(obj => <PizzaBlock
                        key={obj.id}
                        {...obj}
                    />) : Array(12).fill(0).map((_, index)=> <LoadingBlock key={index }/>)
                }
            </div>
        </div>
    )
}

export default Home
