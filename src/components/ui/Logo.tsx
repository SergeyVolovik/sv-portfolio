import { LogoIcon } from '@/assets';
import { Link } from '@/components/controllers';

export const Logo = () => {
  return (
    <div className="w-full h-full max-w-[129px] max-h-[58px] rotate-0 hover:-rotate-6 transition-all duration-200 ease-linear">
      <Link href="/">
        <LogoIcon />
      </Link>
    </div>
  );
};
