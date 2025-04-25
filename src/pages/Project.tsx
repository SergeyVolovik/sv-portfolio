import { useParams } from 'react-router-dom';

export const Project = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl text-red-500">Project ID: {id}</h1>
    </div>
  );
};
