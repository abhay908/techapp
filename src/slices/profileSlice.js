import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): null,
    loading: false,
};

//creating Slice 
const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers:{
        setUser(state,value){
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    }
});

//exports 
export const {setUser,setLoading} = profileSlice.actions;
export default profileSlice.reducer;