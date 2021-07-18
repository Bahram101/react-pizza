import React from "react";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from 'react-router-dom';
import { setPizzas } from "./redux/actions/pizzas";



function App() {

	const dispatch = useDispatch()

	React.useEffect(() => {		
		axios.get('http://localhost:3001/pizzas').then(({data}) => {
			dispatch(setPizzas(data))	 
		})		
	}, [])
		

	const { items } = useSelector(({pizzas, filters}) => {
		return {
			items: pizzas.items,
			sortBy: filters.sortBy
		}
	})


	return (

		<div className="wrapper">
			<Header />
			<div className="content">
				<Route exact path="/" render={() => <Home items={items} />} />
				<Route exact path="/cart" component={Cart} />
			</div>
		</div>
	);
}

export default App;
