function Header() {
  return (
    <div className="flex justify-between w-[1291px] h-[64px] mt-[32px] ml-[219px]">
      <div className="w-[937px] h-[64px]">
        <h2 className="w-[183px] h-[43px] font-[700] text-[32px] leading[42.56px]">
          My Tinerary
        </h2>
      </div>
      <div className="flex w-[354px] h-[64px]">
        <a
          className="w-[69px] h-[64px] font-[700] text-[24px] mt-[10px] mr-[25px]"
          href="#"
        >
          Home
        </a>
        <a
          className="w-[69px] h-[64px] font-[700] text-[24px] mt-[10px] mr-[25px]"
          href="#"
        >
          Cities
        </a>

        <button className="font-bold bg-indigo-600 text-gray-50 text-lg rounded-lg inline-block w-[159px] h-[64px] gap-[10px] py-4 px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[21px] h-[20px] inline-block mr-[5px]"
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
