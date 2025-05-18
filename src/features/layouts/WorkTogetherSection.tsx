import { Paragraph, Title } from '@/components';
import {
  ButtonGroup,
  CopyEmailButton,
  HireButton,
  SectionWithTitle
} from '@/features';

export const WorkTogetherSection = () => (
  <SectionWithTitle className="my-10 flex-col bg-white justify-center items-center gap-5 text-center">
    <Title>Let’s work together</Title>
    <Paragraph>
      Creating user experience and visual appealing applications
    </Paragraph>
    <ButtonGroup>
      <HireButton />
      <CopyEmailButton />
    </ButtonGroup>
  </SectionWithTitle>
);
