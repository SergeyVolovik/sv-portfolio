import { BackgroundIcons, ContactIcon, DownloadIcon } from '@/assets';
import { Button } from '@/components';

export const Home = () => (
  <section id="#home" className="w-full h-full pt-[128px] px-28 relative">
    <BackgroundIcons />
    <div className="flex flex-col items-center justify-center gap-[64px]">
      <h1 className="w-full max-w-[753px] text-[52px] font-bold">
        <span>
          <span>Hi, I`m</span>{' '}
          <span className="text-primary">Serhii Volovik</span>
        </span>
        <br />
        <div className="text-right">
          <span className="text-primary">I’m</span>{' '}
          <span>Front End Developer</span>
        </div>
      </h1>
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-[14px]">
          <Button onClick={() => {}}>
            <DownloadIcon />
            <span>Download CV</span>
          </Button>
        </div>
        <Button onClick={() => {}}>
          <ContactIcon />
          <span>Contact me</span>
        </Button>
      </div>
    </div>
  </section>
);
