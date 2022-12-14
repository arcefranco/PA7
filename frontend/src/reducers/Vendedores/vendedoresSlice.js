import { createSlice } from '@reduxjs/toolkit/dist'
import { createAsyncThunk } from '@reduxjs/toolkit/dist'
import vendedoresService from './vendedoresService'


const initialState = {
    
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    vendedores: [],
    vendedoresById: [],
    teamleader:[],
    teamleaderActivo:[],
    escalas:[],
    oficialesScoring:[],
    oficialesMora:[],
    oficialesScoringActivos:[],
    oficialesMoraActivos:[],
    statusNuevoVendedor: [],
}

export const getVendedores = createAsyncThunk('vendedores', async (thunkAPI) => {
    try {
      const data = await vendedoresService.getVendedores()
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  
  export const getVendedoresById = createAsyncThunk('getvendedoresbyid', async (vendedoresData,thunkAPI) => {
    try {
      const data = await vendedoresService.getVendedoresById(vendedoresData)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

  export const endUpdate = createAsyncThunk('endUpdate', async (usuarioData, thunkAPI) => {
    try {
      
      const data = await vendedoresService.endUpdate(usuarioData)

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

  export const beginUpdate = createAsyncThunk('beginUpdate', async (usuarioData, thunkAPI) => {
    try {
      
      const data = await vendedoresService.beginUpdate(usuarioData)

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const getAllEscalas = createAsyncThunk('vendedores/escalas', async (thunkAPI) => {
    try {
      
      const data = await vendedoresService.getAllEscalas()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const getAllTeamLeaders = createAsyncThunk('vendedores/teamleader', async (thunkAPI) => {
    try {
      
      const data = await vendedoresService.getAllTeamLeaders()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const getAllTeamLeadersActivos = createAsyncThunk('vendedores/teamleadersActivos', async (thunkAPI) => {
    try {
      
      const data = await vendedoresService.getAllTeamLeadersActivos()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const getAllOficialesScoring = createAsyncThunk('vendedores/ofcialesScoring', async (thunkAPI) => {
    try {
      
      const data = await vendedoresService.getAllOficialesScoring()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const getAllOficialesMora = createAsyncThunk('vendedores/oficialesMora', async (thunkAPI) => {
    try {
      
      const data = await vendedoresService.getAllOficialesMora()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const getAllOficialesScoringActivos = createAsyncThunk('vendedores/ofcialesScoringActivos', async (thunkAPI) => {
    try {
      
      const data = await vendedoresService.getAllOficialesScoringActivos()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const getAllOficialesMoraActivos = createAsyncThunk('vendedores/oficialesMoraActivos', async (thunkAPI) => {
    try {
      
      const data = await vendedoresService.getAllOficialesMoraActivos()

      return data
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
export const postVendedores = createAsyncThunk('postvendedores', async  (form,thunkAPI) => {
    try {
      const data = await vendedoresService.postVendedores(form)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

export const updateVendedores = createAsyncThunk('updatevendedores', async (form, thunkAPI) => {
    try {
      const data = await vendedoresService.updateVendedores(form)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })

  export const deleteVendedores = createAsyncThunk('deletevendedores', async (vendedoresData ,thunkAPI) => {
    try {
      const data = await vendedoresService.deleteVendedores(vendedoresData)
      return data
    } catch (error) {
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })



export const vendedoresSlice = createSlice({
    name: 'vendedores',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },

      resetStatus: (state) => {
        state.statusNuevoVendedor = []
      }
    },

    extraReducers: (builder) => {
        
        builder.addCase(getVendedores.pending, (state) => {
            state.isLoading = true
          })
        builder.addCase(getVendedores.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.vendedores = action.payload
          }) 
        builder.addCase(getVendedores.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.vendedores = null
          });

          builder.addCase(getVendedoresById.pending, (state) => {
            state.isLoading = true
          })
        builder.addCase(getVendedoresById.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoVendedor = action.payload
          }) 
        builder.addCase(getVendedoresById.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = null
            state.statusNuevoVendedor = action.payload
          });
        builder.addCase(beginUpdate.pending, (state) => {
            state.isLoading = true
          })
        builder.addCase(beginUpdate.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoVendedor = action.payload
          }) 
        builder.addCase(beginUpdate.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoVendedor = action.payload
          });
          builder.addCase(getAllTeamLeaders.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(getAllTeamLeaders.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teamleader = action.payload
          }) 
          builder.addCase(getAllTeamLeaders.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.teamleader = null
          });
          builder.addCase(getAllTeamLeadersActivos.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(getAllTeamLeadersActivos.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teamleaderActivo = action.payload
          }) 
          builder.addCase(getAllTeamLeadersActivos.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.teamleaderActivo = null
          });
          builder.addCase(getAllEscalas.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(getAllEscalas.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.escalas = action.payload
          }) 
          builder.addCase(getAllEscalas.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.escalas = null
          })
          builder.addCase(getAllOficialesScoring.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(getAllOficialesScoring.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.oficialesScoring = action.payload
          }) 
          builder.addCase(getAllOficialesScoring.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.oficialesScoring = null
          })
          builder.addCase(getAllOficialesMora.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(getAllOficialesMora.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.oficialesMora = action.payload
          }) 
          builder.addCase(getAllOficialesMora.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.oficialesMora = null
          })
          builder.addCase(getAllOficialesScoringActivos.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(getAllOficialesScoringActivos.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.oficialesScoringActivos = action.payload
          }) 
          builder.addCase(getAllOficialesScoringActivos.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.oficialesScoringActivos = null
          })
          builder.addCase(getAllOficialesMoraActivos.pending, (state) => {
            state.isLoading = true
          })
          builder.addCase(getAllOficialesMoraActivos.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.oficialesMoraActivos = action.payload
          }) 
          builder.addCase(getAllOficialesMoraActivos.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.oficialesMoraActivos = null
          })
        builder.addCase(postVendedores.pending, (state) => {
            state.isLoading = true
            state.statusNuevoVendedor = []
          })
        builder.addCase(postVendedores.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoVendedor = action.payload
          }) 
        builder.addCase(postVendedores.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoVendedor = action.payload
          });

        builder.addCase(updateVendedores.pending, (state) => {
            state.isLoading = true
            state.statusNuevoVendedor = []
          })
        builder.addCase(updateVendedores.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoVendedor = action.payload
          }) 
        builder.addCase(updateVendedores.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoVendedor = action.payload
          });
          
          builder.addCase(deleteVendedores.pending, (state) => {
            state.isLoading = true
            state.statusNuevoVendedor = []
          })
        builder.addCase(deleteVendedores.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.statusNuevoVendedor = action.payload
          }) 
        builder.addCase(deleteVendedores.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.statusNuevoVendedor = action.payload
            state.vendedores = null
          });


        }
        


})

export const { reset, resetStatus } = vendedoresSlice.actions
export default vendedoresSlice.reducer