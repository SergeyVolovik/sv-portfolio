import { CopyEmailButton, HireButton } from './controllers';

export const ButtonGroup = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className || ''}`}>
    <HireButton />
    <CopyEmailButton />
  </div>
);
