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

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl text-red-500">Project ID: {id}</h1>
      </div>
      <ProjectsSection sectionTitle="Other Projects" />
    </>
  );
};
