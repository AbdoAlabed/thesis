import { ADD_ELEMENT, SELECT_ELEMENT, EDIT_ELEMENT, SET_ELEMENTS, CLEAR_ELEMENTS } from './constants';

export const setElementsDispatcher = (payload) => ({
    type: SET_ELEMENTS,
    payload
});

export const setElements = pageId => async dispatch => {
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/element/${pageId}`);
        let data = await response.json();
        if(response.status == 200){
            dispatch(setElementsDispatcher(data));
        }
    } catch( err ) {

    }
}

export const clearElements = () => ({
    type: CLEAR_ELEMENTS
});

export const addElementDispatcher = (payload) => ({
    type: ADD_ELEMENT,
    payload
});

export const addElement = (element) => async (dispatch, getState) => {
    let pageId = getState().selectedPage._id;
    console.log(pageId, element)
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/element`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ pageId, element }) // body data type must match "Content-Type" header
          });
        console.log(response)
        let data = await response.json();
        if(response.status == 201){
            dispatch(addElementDispatcher(data));
        }
    } catch(err) {
        console.log(err);
    }
}

export const selectElementDispatcher = (payload) => ({
    type: SELECT_ELEMENT,
    payload
});

export const editElementDispatcher = (payload) => ({
    type: EDIT_ELEMENT,
    payload
});