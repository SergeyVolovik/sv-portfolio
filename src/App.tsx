import { Footer, Header, Navigation, Panel, Wrapper } from '@/components';
import { HireButton, NavigationLinks, ThemeSwitchButton } from '@/features';
import { usePageTitle, useScrollToTop } from '@/hooks';
import { Outlet } from 'react-router-dom';

export const App = () => {
  usePageTitle();
  useScrollToTop();

  return (
    <>
      <Header>
        <Navigation>
          <Panel className="p-[14px] flex justify-between">
            <NavigationLinks />
            <div className="flex items-center gap-4 flex-wrap">
              <ThemeSwitchButton />
              <HireButton />
            </div>
          </Panel>
        </Navigation>
      </Header>
      <Wrapper>
        <Panel className="p-2 flex flex-col items-center gap-4">
          <Outlet />
          <Footer />
        </Panel>
      </Wrapper>
    </>
  );
};
