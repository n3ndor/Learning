import Nav from "./Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
