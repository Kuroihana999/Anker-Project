const Nav = () => {
  return (
    <nav className="bg-gray-800 w-64 h-screen">
      <ul className="py-4">
        <h1 className="text-white block py-1 flex justify-center">
          <a className="text-3xl font-bold italic" href="/public/index.html">CyberSync</a>
        </h1>
        <h2 className="text-white block  flex justify-center text-xs font-bold italic">Cyberspace unified</h2>

        <li className="py-2">
          <a className="text-white block p-2 hover:bg-gray-400" href="#">
            Home
          </a>
          <a className="text-white block p-2 hover:bg-gray-400" href="#">
            Blog
          </a>
          <a className="text-white block p-2 hover:bg-gray-400" href="#">
            News
          </a>
          <a className="text-white block p-2 hover:bg-gray-400" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
