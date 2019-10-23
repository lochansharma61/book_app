
const initialState = {
    books: [],
}

export default function booksReducer(state = initialState, action) {

    switch(action.type) {
    
        case 'FETCH_BOOKS':
            return {
                ...state,
                books: action.payload
            }
            
        default:
            return{ 
            ...state
        }
            
    }
}