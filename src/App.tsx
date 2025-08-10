import { Footer, Header, Navigation, Panel, Wrapper } from '@/components';
import {
  FadeUpComponent,
  HireButton,
  NavigationLinks,
  QRWithPopover,
  ThemeSwitchButton
} from '@/features';
import { usePageTitle, useScrollToTop } from '@/hooks';
import { Outlet } from 'react-router-dom';

export const App = () => {
  const { isContactPage } = usePageTitle();
  useScrollToTop();

  return (
    <>
      <Header>
        <Navigation>
          <Panel className="p-[14px] flex justify-between">
            <NavigationLinks />
            <div className="flex items-center gap-4 flex-wrap">
              <QRWithPopover />
              <ThemeSwitchButton />
              {!isContactPage ? <HireButton /> : null}
            </div>
          </Panel>
        </Navigation>
      </Header>
      <FadeUpComponent>
        <Wrapper>
          <Panel className="p-2 flex flex-col items-center justify-between gap-4">
            <Outlet />
            <Footer />
          </Panel>
        </Wrapper>
      </FadeUpComponent>
    </>
  );
};
