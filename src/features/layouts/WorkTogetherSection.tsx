import { Paragraph, Title } from '@/components';
import {
  ButtonGroup,
  CopyEmailButton,
  HireButton,
  SectionWithTitle
} from '@/features';

export const WorkTogetherSection = () => (
  <SectionWithTitle className="theme__section mt-6 mb-10 flex-col justify-center items-center gap-5 text-center">
    <Title>Let’s work together</Title>
    <Paragraph className="mb-2">
      Creating user experience and visual appealing applications
    </Paragraph>
    <ButtonGroup>
      <HireButton />
      <CopyEmailButton />
    </ButtonGroup>
  </SectionWithTitle>
);
