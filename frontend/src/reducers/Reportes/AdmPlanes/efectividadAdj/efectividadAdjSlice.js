import { createSlice } from "@reduxjs/toolkit/dist";
import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import efectividadAdjService from "./efectividadAdjService";

const initialState = {
  adjudicaciones: [],
  adjudicacionesDetalle: [],
  oficialesAdj: [],
  adjudicacionStatus: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAdjudicaciones = createAsyncThunk(
  "Reportes/efectividadAdj/getAdj",
  async (data, { rejectWithValue }) => {
    const result = await efectividadAdjService.getAdjudicaciones(data);
    if (Array.isArray(result)) {
      return result;
    } else {
      return rejectWithValue(result);
    }
  }
);

export const getDetalleEfectividad = createAsyncThunk(
  "Reportes/efectividadAdj/detalle",
  async (data, { rejectWithValue }) => {
    const result = await efectividadAdjService.getDetalleEfectividad(data);
    if (Array.isArray(result)) {
      return result;
    } else {
      return rejectWithValue(result);
    }
  }
);

export const getOficialesAdj = createAsyncThunk(
  "Reportes/efectividadAdj/getOficiales",
  async (f, { rejectWithValue }) => {
    const result = await efectividadAdjService.getOficialesAdj();
    if (Array.isArray(result)) {
      return result;
    } else {
      return rejectWithValue(result);
    }
  }
);

export const efectividadAdjSlice = createSlice({
  name: "efectividadAdj",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.adjudicaciones = [];
      state.adjudicacionesDetalle = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdjudicaciones.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adjudicaciones = action.payload;
      })
      .addCase(getAdjudicaciones.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.adjudicacionStatus = action.payload;
      })
      .addCase(getAdjudicaciones.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetalleEfectividad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adjudicacionesDetalle = action.payload;
      })
      .addCase(getDetalleEfectividad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.adjudicacionStatus = action.payload;
      })
      .addCase(getDetalleEfectividad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOficialesAdj.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.oficialesAdj = action.payload;
      })
      .addCase(getOficialesAdj.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.adjudicacionStatus = action.payload;
      })
      .addCase(getOficialesAdj.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { reset } = efectividadAdjSlice.actions;
export default efectividadAdjSlice.reducer;
