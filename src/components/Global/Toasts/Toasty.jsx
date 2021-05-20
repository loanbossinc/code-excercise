import { toast } from "react-toastify";

export function ToastSuccess(message) {
  toast.success(message, { position: toast.POSITION.BOTTOM_RIGHT });
}

export function ToastError(message) {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000
  });
}

export function ToastInfo(message) {
  toast.info(message, { position: toast.POSITION.BOTTOM_RIGHT });
}
