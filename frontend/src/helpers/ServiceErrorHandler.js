import axios, { AxiosError } from "axios";

export const ServiceErrorHandler = (error, table) => {
  if (axios.isAxiosError(error) || error.hasOwnProperty("message")) {
    return { status: false, message: error.message + " " + "(" + table + ")" };
  } else if (error.hasOwnProperty("name")) {
    return { status: false, message: error.name + " " + "(" + table + ")" };
  } else {
    return {
      status: false,
      message: JSON.stringify(error) + " " + "(" + table + ")",
    };
  }
};
