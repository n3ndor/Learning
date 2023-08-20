const Nav = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/items">Items</a>
          </li>
          <li>
            <a href="/addItem">Add Item</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
