const initialStates = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
}

function filters(state=initialStates, action){
    
    if(action.type === 'SET_CATEGORY'){
        return {
            ...state,
            category: action.payload
        }
    }

    if(action.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy: action.payload            
        }
    }
    
    return state
}

export default filters