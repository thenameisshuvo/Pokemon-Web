const Navbar = () => {
  return (
    <nav className="navbar px-[10%] bg-gray-900 text-white shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost font-bold text-3xl hover:text-gray-300 transition-all">Pokemon</a>
      </div>

      <div className="flex-none gap-2">
        {/* Search Bar */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="input input-bordered w-28 md:w-auto bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Avatar Dropdown */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border border-gray-700 hover:scale-105 transition-all">
              <img
                alt="Pokemon Avatar"
                src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24836298/pikachu_artwork.jpg?quality=90&strip=all&crop=3.125%2C0%2C93.75%2C100&w=750"
              />
            </div>
          </button>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <a className="flex justify-between hover:bg-gray-700 rounded-md px-2 py-1">
                Profile <span className="badge bg-blue-500 text-white">New</span>
              </a>
            </li>
            <li>
              <a className="hover:bg-gray-700 rounded-md px-2 py-1">Settings</a>
            </li>
            <li>
              <a className="hover:bg-gray-700 rounded-md px-2 py-1 text-red-400">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
