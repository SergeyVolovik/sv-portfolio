import { Paragraph, Title } from '@/components';
import { PROJECTS } from '@/constants';
import { ProjectsSection } from '@/features';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!project) navigate('/404', { replace: true });
  }, [project, navigate]);

  if (!project) return null;
  const TECH_STACK_BADGES = ['React', 'TypeScript', 'Tailwind CSS'];

  return (
    <>
      <div className="w-full p-4 flex flex-col gap-4">
        <Title>Project Title</Title>
        <Paragraph>
          Project Description: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur, reprehenderit in illo, molestiae
          sequi, ducimus repellendus totam ratione maiores ad quasi iste
          repudiandae asperiores at deleniti vel? Aut, porro saepe.
        </Paragraph>
        <h1 className="text-xl text-red-500">Project ID: {id}</h1>
        <div>
          {TECH_STACK_BADGES.map((badge) => (
            <span key={badge} className="mr-2 badge">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <ProjectsSection sectionTitle="Other Projects" />
    </>
  );
};
