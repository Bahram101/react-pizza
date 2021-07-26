import React from 'react';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from '../redux/actions/cart';



const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: "popular", order: 'desc' },
    { name: 'цене', type: "price", order: 'desc' },
    { name: 'алфавиту', type: "name", order: 'asc' }
]


function Home() {
    const dispatch = useDispatch()
    const { items, isLoaded } = useSelector(({ pizzas }) => pizzas)
    const { category, sortBy } = useSelector(({ filters }) => filters)
    const cartItems  = useSelector(({ cart }) => cart.items)


    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])


    const onSelectCategory = React.useCallback((category) => {
        dispatch(setCategory(category))
    }, [])


    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = (obj) =>{
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    activeCategory={category}
                    onClickItem={onSelectCategory} />
                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onSelectSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(obj => <PizzaBlock
                        onClickAddPizza={handleAddPizzaToCart}
                        key={obj.id}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                        {...obj}
                    />) : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}

export default Home
