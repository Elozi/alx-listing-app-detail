const Header = () => {
    return (
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">StayFinder</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600">Rooms</a>
          <a href="#" className="text-gray-600">Mansion</a>
          <a href="#" className="text-gray-600">Countryside</a>
        </nav>
        <div className="space-x-4">
          <input type="text" placeholder="Search..." className="border rounded px-2 py-1" />
          <button className="text-blue-600">Sign In</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  