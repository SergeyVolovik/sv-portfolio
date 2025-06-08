import { Paragraph, Title } from '@/components';
import { ProjectsSection, SectionWithTitle } from '@/features';

export const Projects = () => {
  return (
    <SectionWithTitle
      sectionTitle="Projects"
      className="mt-6 mb-0 flex-col bg-white justify-start items-start gap-5 text-justify"
    >
      <Title>My Best Works</Title>
      <Paragraph>
        Here are some of the projects I&apos;ve worked on recently. Feel free to
        explore!
      </Paragraph>
      <ProjectsSection />
    </SectionWithTitle>
  );
};
