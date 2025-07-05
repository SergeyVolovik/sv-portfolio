import { ProjectArrowRightIcon } from '@/assets';
import { Avatar } from '@/components';
import { NAVIGATION_PATHS } from '@/configs';
import { NavLinkButton } from '@/features';
import { ProjectBlockLinkProps } from '@/interfaces';

export const ProjectBlockLink = ({
  projectId,
  imgSrc,
  title,
  description
}: ProjectBlockLinkProps) => (
  <NavLinkButton
    className="group !p-[20px] col-start-1 col-end-3 text-black text-left bg-white border border-solid border-blackRgba10 rounded-md"
    linkTo={`${NAVIGATION_PATHS.PROJECTS}/${projectId}`}
  >
    <div className="w-full flex items-center gap-4">
      <Avatar
        className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] relative before:w-[60px] before:h-[60px] before:block before:absolute before:-right-[6px] before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blackRgba7 before:border before:border-solid before:border-blackRgba10"
        imgSrc={imgSrc || 'https://avatars.githubusercontent.com/u/12?v=4'}
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-black">{title || 'Project title'}</h4>
        <p className="text-darkGray">{description || 'Project description'}</p>
      </div>
    </div>
    <ProjectArrowRightIcon className="transition-all duration-300 transform group-hover:translate-x-[4px] group-hover:stroke-darkGray stroke-lightGray" />
  </NavLinkButton>
);
