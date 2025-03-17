import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    filterByTitle: "",
    filterByAuthor: "", 
    favoritBooks: false
}
// poisk po filter action
export const filterSlice = createSlice({
    name: "filter" ,
    initialState,
    reducers: {
        // title
        titleValuehandler: (state,action) => {
            state.filterByTitle = action.payload
        },
        
        authorValueHandler: (state, action)=> {
            state.filterByAuthor = action.payload
        },

        onlyFavorites: (state) => {
            state.favoritBooks = !state.favoritBooks  
        },
        // onclick bolgondo 
        resetFilter: (state) => {
            state.favoritBooks = false
            state.filterByAuthor =""
            state.filterByTitle = ""

        },

    }
})