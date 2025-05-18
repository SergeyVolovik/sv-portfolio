import { ArrowRightIcon } from '@/assets';
import { Paragraph, Title } from '@/components';
import { BUTTONS_CONFIG, NAVIGATION_PATHS } from '@/configs';
import {
  BackHomeButton,
  ButtonGroup,
  NavLinkButton,
  SectionWithTitle
} from '@/features';

export const NotFound = () => (
  <SectionWithTitle className="pt-4 flex-col bg-white" sectionTitle="Oops! 404">
    <div className="my-12 flex flex-col items-center justify-center gap-3">
      <Title>Page not found</Title>
      <Paragraph>The page is does not exist</Paragraph>
      <ButtonGroup>
        <BackHomeButton />
        <NavLinkButton linkTo={NAVIGATION_PATHS.PROJECTS}>
          <span>{BUTTONS_CONFIG.SEE_MY_WORK}</span>
          <ArrowRightIcon className="fill__gray" />
        </NavLinkButton>
      </ButtonGroup>
    </div>
  </SectionWithTitle>
);
