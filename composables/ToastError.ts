import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useToastError = (message: string) => {

  const notify = () => {
  toast(message, {
    autoClose: 10000,
    hideProgressBar: false,
    newestOnTop: true,
    position: "top-right",
    theme: 'colored',
    type: toast.TYPE.ERROR
  }); // ToastOptions
}

  return notify();
}
