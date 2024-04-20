import { Header, IconButtonWrapper, Logo, Navigation } from '@/components';
import { ThemeSwitchButton } from '@/features';

export const Home = () => (
  <section>
    <Header>
      <Logo />
      <Navigation>navigation</Navigation>
      <IconButtonWrapper>
        <ThemeSwitchButton />
      </IconButtonWrapper>
    </Header>
  </section>
);
