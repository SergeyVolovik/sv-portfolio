export const Avatar = ({
  className,
  imgSrc
}: {
  className: string;
  imgSrc: string;
}) => (
  <div className={`avatar ${className}`}>
    <img
      src={imgSrc || 'https://i.pravatar.cc/150?u=a042581f4e29026024d'}
      alt="avatar"
    />
  </div>
);
