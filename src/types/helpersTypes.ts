import { ToastOptions } from "react-toastify";

export enum EToastifyStatuses {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info'
}

export type TToastifyHelper = {
  status: EToastifyStatuses;
  message: string;
  objData?: {
    [key: string]: string | number | boolean | undefined;
  };
};

export type ToastFunctions = {
  [key: string]: (message: string, options?: ToastOptions) => React.ReactNode;
};

export type TGenericValidation = {
  value: string,
  
    [key: string]: string | number | boolean
  
}