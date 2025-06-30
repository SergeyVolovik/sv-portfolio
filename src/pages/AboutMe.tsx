import { Paragraph, Title } from '@/components';
import { ProjectsSection, SectionWithTitle } from '@/features';

export const AboutMe = () => {
  return (
    <>
      <SectionWithTitle
        sectionTitle="About Me"
        className="mt-[18px] mb-6 flex-col bg-white justify-start items-start gap-5 text-justify"
      >
        <Title>Chao! It&apos;s Me</Title>
        <Paragraph>
          I&apos;m Serhii Volovyk, a passionate developer with a love for
          creating beautiful and functional web applications. My journey in tech
          has been exciting, and I&apos;ve had the opportunity to work on a
          variety of projects that showcase my skills and creativity.
        </Paragraph>
      </SectionWithTitle>
      <ProjectsSection sectionTitle="Exciting Projects" />
    </>
  );
};
