import axios, { AxiosResponse, AxiosError } from "axios";
import getHeaderDB from "../../helpers/getHeaderDB";
import getHeaderToken from "../../helpers/getHeaderTokenAndDB";
import { ServiceErrorHandler } from "../../helpers/ServiceErrorHandler";

export const getFunction = async (route) => {
  try {
    const headers = getHeaderDB();
    const response = await axios.get(
      process.env.REACT_APP_HOST + route,
      headers
    );
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    return ServiceErrorHandler(error, route);
  }
};

export const postFunction = async (route, form) => {
  try {
    const headers = getHeaderToken();
    const response = await axios.post(
      process.env.REACT_APP_HOST + route,
      form,
      headers
    );
    if (response.data.hasOwnProperty("status") && response.data.status) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    return ServiceErrorHandler(error, route);
  }
};

export const postFunctionArray = async (route, data) => {
  try {
    const headers = getHeaderToken();
    const response = await axios.post(
      process.env.REACT_APP_HOST + route,
      data,
      headers
    );
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    return ServiceErrorHandler(error, route);
  }
};

export const updateFunction = async (route, form) => {
  try {
    const headers = getHeaderToken();
    const response = await axios.put(
      process.env.REACT_APP_HOST + route,
      form,
      headers
    );
    if (response.data.hasOwnProperty("status") && response.data.status) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    return ServiceErrorHandler(error, route);
  }
};

export const deleteFunction = async (route, id) => {
  try {
    const response = await axios.delete(process.env.REACT_APP_HOST + route, {
      headers: {
        "x-auth-token": window.localStorage.getItem("userToken")?.split(" ")[1],
        "db-connection": window.localStorage.getItem("db"),
      },
      data: id,
    });

    if (response.data.hasOwnProperty("status") && response.data.status) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    return ServiceErrorHandler(error, route);
  }
};
