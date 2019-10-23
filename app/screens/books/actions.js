import { getBooks } from '../../api/books';

export function fetchBooks() {
    return async function (dispatch, getState) {
       
        try {
            let data = await getBooks();
            dispatch(getToDosSuccess(data))
        }
        catch (error) {
            console.log('err ', error)
        }
        
    }
}

function getToDosSuccess(data) {
    return {
        type: "FETCH_BOOKS",
        payload: data
    }
}
