import { createSlice } from '@reduxjs/toolkit/dist'
import { createAsyncThunk } from '@reduxjs/toolkit/dist'
import gerentesService from './gerentesService'


const initialState = {
    gerentes: [],
    gerentesById: [],
    statusNuevoGerente: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getGerentes = createAsyncThunk('gerentes', async (thunkAPI) => {
    try {
      const data = await gerentesService.getGerentes()
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  

export const postGerentes = createAsyncThunk('postgerentes', async  (form,thunkAPI) => {
    try {
      const data = await gerentesService.postGerentes(form)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

export const updateGerentes = createAsyncThunk('updategerentes', async (form, thunkAPI) => {
    try {
      const data = await gerentesService.updateGerentes(form)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

  export const deleteGerentes = createAsyncThunk('deletegerentes', async (gerentesData ,thunkAPI) => {
    try {
      const data = await gerentesService.deleteGerentes(gerentesData)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const endUpdate = createAsyncThunk('endUpdate', async (gerentesData ,thunkAPI) => {
    try {
      const data = await gerentesService.endUpdate(gerentesData)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

  export const beginUpdate = createAsyncThunk('beginUpdate', async (gerentesData ,thunkAPI) => {
    try {
      const data = await gerentesService.beginUpdate(gerentesData)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })



export const gerentesSlice = createSlice({
    name: 'gerentes',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },

      resetStatus : (state) => {
        state.statusNuevoGerente = []
      }
      
    },

    extraReducers: (builder) => {
        
        builder.addCase(getGerentes.pending, (state) => {
            state.isLoading = true
          })
        builder.addCase(getGerentes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.gerentes = action.payload
          }) 
        builder.addCase(getGerentes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.gerentes = null
          });

          builder.addCase(beginUpdate.pending, (state) => {
            state.isLoading = true
            state.statusNuevoGerente = []
          })
        builder.addCase(beginUpdate.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoGerente = action.payload
          }) 
        builder.addCase(beginUpdate.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoGerente = action.payload
          });

          
        builder.addCase(postGerentes.pending, (state) => {
            state.isLoading = true
            state.statusNuevoGerente = []

          })
        builder.addCase(postGerentes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoGerente = action.payload
          }) 
        builder.addCase(postGerentes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoGerente = action.payload
            state.gerentes = null
          });

        builder.addCase(updateGerentes.pending, (state) => {
            state.isLoading = true
            state.statusNuevoGerente = []

          })
        builder.addCase(updateGerentes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoGerente = action.payload

          }) 
        builder.addCase(updateGerentes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoGerente = action.payload
          });
          
          builder.addCase(deleteGerentes.pending, (state) => {
            state.isLoading = true
            state.statusNuevoGerente = []

          })
        builder.addCase(deleteGerentes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoGerente = action.payload

          }) 
        builder.addCase(deleteGerentes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoGerente = action.payload
          });


        }
        


})

export const { reset, resetStatus } = gerentesSlice.actions
export default gerentesSlice.reducer