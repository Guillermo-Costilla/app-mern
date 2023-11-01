import logo from '../images/icon/avion.png'

export default function Footer() {
    return (

        <footer className="bg-white dark:bg-gray-900 mt-40">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex justify-center items-center mb-4 sm:mb-0 w-full">
                        <img src={logo} className="h-8 mr-2" alt="Avion Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">My Tinerary</span>
                    </a>
                    <ul className="w-full flex flex-1 items-center justify-center mb-6 text-sm font-medium  sm:mb-0 md:max-lg:mr-6">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6  w-full">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 w-full">Privacy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6  w-full">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline w-full">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-center">© 2023 <a href="#" className="hover:underline">My Tinerary™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}