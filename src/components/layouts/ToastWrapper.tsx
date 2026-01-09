import { useDarkModeContext } from '@/contexts';
import { Bounce, ToastContainer } from 'react-toastify';

export const ToastWrapper = ({
  position = 'top-right',
  autoClose = 5000
}: {
  position?:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
  autoClose?: number;
}) => {
  const { modeText } = useDarkModeContext();

  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={modeText}
      transition={Bounce}
    />
  );
};
