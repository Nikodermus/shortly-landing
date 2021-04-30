import ShortenedLink from '../../types/ShortenedLink.d';

export interface LinkBoxProps {
  link: ShortenedLink;
}

const LinkBox: React.FC<LinkBoxProps> = ({ link }) => {
  return <div>{link.original}</div>;
};

export default LinkBox;
