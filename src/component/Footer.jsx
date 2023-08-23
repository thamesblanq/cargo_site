import { FaDiscord, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="w-full mt-4">

        <div>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-y-2">

                                    <div className="grid grid-cols-2 gap-x-32 order-2 md:order-1 md:gap-auto md:flex px-8 md:px-0 md:justify-around items-start">

                                        <div className="flex flex-col gap-4 mb-2 md:mb-0 order-2 md:order-1">
                                            <h1 className="text-primary font-bold font-poppins">Cargo</h1>
                                            <div className="flex items-center justify-around gap-4 flex-row md:flex-row">
                                                <FaDiscord className="text-xl font-bold hover:text-purple-800 cursor-pointer"/>
                                                <FaFacebook className="text-xl font-bold hover:text-blue-600 cursor-pointer"/>
                                                <FaTwitter className="text-xl font-bold hover:text-blue-400 cursor-pointer"/>
                                                <FaInstagram className="text-xl font-bold hover:text-pink-700 cursor-pointer"/>
                                            </div>
                                        </div>

                                        <div className="order-1 md:order-2">
                                            <h1 className="font-bold text-sm text-black mb-4">Company</h1>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">About</a>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Blog</a>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Services</a>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Meet the team</a>
                                        </div>


                                    </div>


                                    <div className="grid grid-cols-2 gap-x-32 order-1 md:order-2 md:gap-auto md:flex px-8 md:px-0 md:justify-around items-start">

                                        <div>
                                            <h1 className="font-bold text-sm text-black mb-4">About Us</h1>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Privacy Policy</a>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Contact Us</a>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Terms of Use</a>
                                        </div>

                                        <div>
                                            <h1 className="font-bold text-sm text-black mb-4">Contact Us</h1>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">help@cargo.com</a>
                                            <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">+ 234 81 4590 4798</a>
                                        </div>


                                    </div>

                    </section>

        </div>


        <div className="flex items-center justify-center w-full h-[10vh] px-4">
            <p className="text-black font-medium font-poppins text-xs md:text-xl">Copyright&copy; 2021-{year}. Made by Eric & design by <a href="https://www.behance.net/heritageatiba" className="underline">designMojo</a></p>
        </div>
     

    </footer>
  )
}

export default Footer