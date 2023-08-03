function Header() {
  return (
    <div className="flex w-full my-3">
      <h2 className="text-left text-2xl font-bold w-full ml-80 my-3">
        My Tinerary
      </h2>
      <div className="flex w-full justify-end my-3 mr-80">

        <a className="m-3 font-bold text-2xl" href="#">Home</a>
        <a className="m-3 font-bold text-2xl" href="#">Cities</a>

        <button className="text-xl mx-4 bg-indigo-600 text-gray-50 texto-lg px-8 py-4 rounded-lg flex font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 m-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
