import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {data:[],status:false,error:false}


// for Newdata
export const Newdata = createAsyncThunk('data/Newdata',async(_,thunkAPI)=>{
    const {rejectWithValue}  = thunkAPI 
    try{
        const res = await fetch('http://localhost:7000/data');
        const data = await res.json();
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
})

// for setNewdata
export const setNewdata = createAsyncThunk('data/setNewdata',async(send,thunkAPI)=>{
    const {rejectWithValue}  = thunkAPI    
    try{
        const res = await fetch('http://localhost:7000/data',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(send)
        });
        const data = res.json();
        return data
    }catch(error){
        return rejectWithValue(error.message)
    }
})
// for deleteNewdata
export const deleteNewdata = createAsyncThunk('data/deleteNewdata',async(id,thunkAPI)=>{
    const {rejectWithValue}  = thunkAPI
    try{
        await fetch(`http://localhost:7000/data/${id}`,{
            method: 'Delete',
            headers:{'content-type': 'application/json'},
        });
        return id
        
    }catch(error){
        return rejectWithValue(error.message)
    }
})

const getdata = createSlice({
    name:'data',
    initialState,
    extraReducers:{
        // for Newdata
        [Newdata.pending]:(state) => {
            state.status = true;
        },
        [Newdata.fulfilled]:(state,action) => {
            state.status = false;
            state.data = action.payload;
        },
        [Newdata.rejected]:(state) => {
            state.status = false;
            state.error = true;
        },
        // for setNewdata
        [setNewdata.pending]:(state,action) =>{
            state.status = true;
        },
        [setNewdata.fulfilled]:(state,action) =>{
            state.status = false;
            state.data.push(action.payload);
        },
        [setNewdata.rejected]:(state,action) =>{
            state.status = false;
            state.error = true;
        },
        // for deleteNewdata
        [deleteNewdata.pending]:(state,action) =>{
            state.status = true;
        },
        [deleteNewdata.fulfilled]:(state,action) =>{
            state.status = false;
            state.data = state.data.filter((item)=>item.id !== action.payload)
            console.log(action.payload);
        },
        [deleteNewdata.rejected]:(state,action) =>{
            state.status = false;
            state.error = true;
        }
    },
})


export default getdata.reducer