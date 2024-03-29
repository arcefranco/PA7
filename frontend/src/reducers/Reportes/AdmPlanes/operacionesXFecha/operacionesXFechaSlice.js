import { createSlice } from "@reduxjs/toolkit/dist";
import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import operacionesXFechaService from "./operacionesXFechaService";

const initialState = {
  operaciones: [],
  operacionesStatus: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getOperacionesXFecha = createAsyncThunk(
  "Reportes/AdmPlanes/OpXFecha",
  async (data, { rejectWithValue }) => {
    const result = await operacionesXFechaService.getOperacionesXFecha(data);
    if (Array.isArray(result)) {
      return result;
    } else {
      return rejectWithValue(result);
    }
  }
);

export const opXFechaSlice = createSlice({
  name: "OpXFecha",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.operaciones = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOperacionesXFecha.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.operaciones = action.payload;
      })
      .addCase(getOperacionesXFecha.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.operacionesStatus = action.payload;
      })
      .addCase(getOperacionesXFecha.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { reset } = opXFechaSlice.actions;
export default opXFechaSlice.reducer;
