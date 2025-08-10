import { QR_CODE_LIGHT_IMG_PATH, QRMobileIcon } from '@/assets';
import { useDeviceType } from '@/hooks';

const QRPopoverContent = () => (
  <div className="flex flex-col text-sm">
    <span className="mb-1">Quick view a mobile version</span>
    <span className="mb-2">Please scan the QR code:</span>
    <img src={QR_CODE_LIGHT_IMG_PATH} alt="QR code mobile version " />
  </div>
);

export const QRWithPopover = () => {
  const { isDesktop } = useDeviceType();

  if (!isDesktop) return null;

  return (
    <div className="popover popover-hover">
      <label className="popover-trigger flex m-0 p-0 cursor-help">
        <QRMobileIcon />
      </label>
      <div className="popover-content max-w-[220px] mt-2 bg-black text-white">
        <QRPopoverContent />
      </div>
    </div>
  );
};
