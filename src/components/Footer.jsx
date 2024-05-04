import logo from '../images/icon/avion.png'

export default function Footer() {
    return (

        <footer className="bg-white dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex justify-center items-center mb-4 sm:mb-0 w-full">
                        <img src={logo} className="h-8 mr-2" alt="Avion Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200">My Tinerary</span>
                    </a>
                    <ul className="w-full flex flex-1 items-center justify-center mb-6 text-sm font-medium  sm:mb-0 md:max-lg:mr-6">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6  w-full text-gray-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 w-full text-gray-200">Privacy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6  w-full text-gray-200">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline w-full text-gray-200">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-center text-gray-200">© 2023 <a href="#" className="hover:underline text-gray-200">My Tinerary™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}