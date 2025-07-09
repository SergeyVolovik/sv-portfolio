import { Paragraph, Title } from '@/components';
import { ProjectsSection, SectionWithTitle } from '@/features';

export const Projects = () => (
  <>
    <SectionWithTitle
      sectionTitle="Projects"
      className="mt-[18px] mb-4 flex-col bg-white justify-start items-start gap-5 text-justify"
    >
      <Title>My Best Work</Title>
      <Paragraph>
        Here are some of the projects I&apos;ve worked on recently. Feel free to
        explore!
      </Paragraph>
    </SectionWithTitle>
    <ProjectsSection />
  </>
);
