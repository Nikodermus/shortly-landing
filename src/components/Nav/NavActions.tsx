import Link from 'next/link';

import Button from '../lib/Button';
import NavLink from './NavLink';

const NavActions: React.FC = () => {
  return (
    <>
      <Link href="/">
        <NavLink>Login</NavLink>
      </Link>
      <Button>Sign Up</Button>
    </>
  );
};

export default NavActions;
