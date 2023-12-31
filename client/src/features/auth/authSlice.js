import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  confirmResetPasswordService,
  loginService,
  logoutService,
  registerService,
  resetPasswordService,
} from "./authService";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const id = Cookies.get("id");

const initialState = {
  status: token ? true : false,
  id: id ? id : null,
  token: token ? token : null,
  isLoading: false,
  isError: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      return await registerService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      return await loginService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    return await logoutService();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (formData, thunkAPI) => {
    try {
      return await resetPasswordService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const confirmResetPassword = createAsyncThunk(
  "auth/confirmResetPassword",
  async (formData, thunkAPI) => {
    try {
      return await confirmResetPasswordService(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = true;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = false;
        state.token = null;
        state.id = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = true;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = false;
        state.token = null;
        state.id = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = false;
        state.token = null;
        state.id = null;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(confirmResetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmResetPassword.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(confirmResetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
