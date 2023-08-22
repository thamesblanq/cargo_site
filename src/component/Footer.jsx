import { FaDiscord, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="w-full mt-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center content-center">

            <div className="flex justify-around items-start">

                <div className="flex flex-col gap-4">
                    <h1 className="text-primary font-bold font-poppins">Cargo</h1>
                    <div className="flex items-center justify-around gap-4">
                        <FaDiscord className="text-xl font-bold hover:text-purple-800 cursor-pointer"/>
                        <FaFacebook className="text-xl font-bold hover:text-blue-600 cursor-pointer"/>
                        <FaTwitter className="text-xl font-bold hover:text-blue-400 cursor-pointer"/>
                        <FaInstagram className="text-xl font-bold hover:text-pink-700 cursor-pointer"/>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-sm text-black mb-4">Company</h1>
                    <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">About</a>
                    <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Blog</a>
                    <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Services</a>
                    <a href="#" className="text-xs text-gray-500 cursor-pointer block hover:underline pb-4 md:mb-0">Meet the team</a>
                </div>


            </div>


            <div className="flex justify-around items-start">

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

    </footer>
  )
}

export default Footer