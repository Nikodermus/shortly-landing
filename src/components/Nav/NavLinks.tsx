import Link from 'next/link';

import NavLink from './NavLink';

const NavLinks: React.FC = () => {
  return (
    <>
      <Link href="/">
        <NavLink>Features</NavLink>
      </Link>

      <Link href="/">
        <NavLink>Pricing</NavLink>
      </Link>

      <Link href="/">
        <NavLink>Resources</NavLink>
      </Link>
    </>
  );
};

export default NavLinks;
