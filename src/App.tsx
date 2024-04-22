import { Header, Logo, Navigation, Wrapper } from '@/components';
import { NavigationLinks, SocialLinks, ThemeSwitchButton } from '@/features';
import { Home } from '@/sections';

export const App = () => (
  <>
    <Header>
      <Logo />
      <Navigation>
        <NavigationLinks />
      </Navigation>
      <ThemeSwitchButton />
    </Header>
    <Wrapper>
      <SocialLinks />
      <Home />
    </Wrapper>
  </>
);
