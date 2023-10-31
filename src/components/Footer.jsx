import logo from '../images/icon/avion.png'

export default function Footer() {
    return (

        <footer className="bg-white dark:bg-gray-900 mt-40">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex justify-center items-center mb-4 sm:mb-0 w-full">
                        <img src={logo} className="h-8 mr-2" alt="Avion Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Tinerary</span>
                    </a>
                    <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">My Tinerary™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}