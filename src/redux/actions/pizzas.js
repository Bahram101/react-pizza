import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

// export const fetchPizzas = (category, sortBy) => dispatch => {

//     dispatch(setLoaded(false))
//     axios.get(`http://localhost:3001/pizzas?${ category !== null ? `category=${category}` : '' }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
//         dispatch(setPizzas(data))
//     })
// }

export const fetchPizzas = (category, sortBy) => {
  return function (dispatch) {
    dispatch(setLoaded(false));
    axios
      .get(
        `http://localhost:3002/pizzas?${
          category !== null ? `category=${category}` : ""
        }&_sort=${sortBy.type}&_order=${sortBy.order}`
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  };
};

const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
