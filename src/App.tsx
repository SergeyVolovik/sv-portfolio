import { ContactIcon } from '@/assets';
import { Button, Header, Navigation, Panel, Wrapper } from '@/components';
import { BUTTONS_CONFIG } from '@/configs/Buttons.config';
import { NavigationLinks, ThemeSwitchButton } from '@/features';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <Header>
      <Navigation>
        <Panel className="p-[14px] flex justify-between">
          <NavigationLinks />
          <div className="flex items-center gap-4 flex-wrap">
            <ThemeSwitchButton />
            <Button onClick={() => {}}>
              <ContactIcon />
              <span>{BUTTONS_CONFIG.HIRE}</span>
            </Button>
          </div>
        </Panel>
      </Navigation>
    </Header>
    <Wrapper>
      <Panel className="p-2 flex flex-col items-center gap-4">
        <Outlet />
      </Panel>
    </Wrapper>
  </>
);
