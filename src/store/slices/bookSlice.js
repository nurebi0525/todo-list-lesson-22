import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    book: [],
}
// book actions
export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        //spisoktun artina inputtun znacheniyasin salipberet
        addBook: (state, action ) => {
            state.book.push(action.payload)
        },
// bookto favorit je obychniy kilat 
        pickFavoriteBook: (state,action) => {
          state.book = state.book.map((item) => {
                if(item.id === action.payload){
                    return {...item, isFavorite: !item.isFavorite}
                }
                return item;
            })
        },
        // bookto spisokton delete
        deleteBook: (state, action ) => {
            state.book = state.book.filter((item) => item.id !== action.payload)
        },
    },
})

export const {addBook, pickFavoriteBook, deleteBook} = bookSlice.actions;