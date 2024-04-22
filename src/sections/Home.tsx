import { BackgroundIcons, ContactIcon, DownloadIcon } from '@/assets';
import { Button } from '@/components';

export const Home = () => (
  <section className="w-full h-full pt-[128px] px-28 relative">
    <BackgroundIcons />
    <div className=" flex flex-col items-center justify-center">
      <h1>
        <span>Hi, I`m</span> <span>Serhii Volovik</span>
        <br />
        <span>I’m</span> <span>Front End Developer</span>
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
