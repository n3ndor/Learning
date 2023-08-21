import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
            <Link href="/">Home</Link>
      </div>
    </nav>
  );
};

export default Nav;
