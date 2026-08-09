import {
  QR_CODE_DARK_IMG_PATH,
  QR_CODE_LIGHT_IMG_PATH,
  QRMobileIcon
} from '@/assets';
import { useDarkModeContext } from '@/contexts/DarkModeContext';
import { useDeviceType } from '@/hooks';

const QRPopoverContent = ({ imageSrc }: { imageSrc: string }) => (
  <div className="theme__qr-popper-content flex flex-col text-sm">
    <span className="mb-2 px-1">
      Please scan the QR code to view the mobile version:
    </span>
    <img src={imageSrc} alt="QR code mobile version " />
  </div>
);

export const QRWithPopover = () => {
  const { isDarkMode } = useDarkModeContext();
  const { isDesktop } = useDeviceType();

  if (!isDesktop) return null;

  const imageSrc = isDarkMode ? QR_CODE_DARK_IMG_PATH : QR_CODE_LIGHT_IMG_PATH;

  return (
    <div className="popover popover-hover">
      <label className="popover-trigger flex m-0 p-0 cursor-help qr__code">
        <QRMobileIcon />
      </label>
      <div className="popover-content theme__qr-popper max-w-[220px] mt-2 ">
        <QRPopoverContent imageSrc={imageSrc} />
      </div>
    </div>
  );
};
