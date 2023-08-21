import { FaTimes } from "react-icons/fa";

const Dropdown = ({ setShow }) => {
  return (
    <div className="md:hidden flex flex-col gap-4 dark:bg-black bg-white absolute top-0 w-full h-1/2 px-4 mx-auto">
        <FaTimes className="font-semibold text-purple-600 text-5xl mt-2 mr-4 cursor-pointer absolute right-0 top-2 hover:text-red-500" onClick={() => setShow((prev) => !prev)} />
        <nav className="flex flex-col gap-4 mt-16 items-center">
            <ul><li className="dark:text-white text-black cursor-pointer hover:font-bold">About</li></ul>
            <ul><li className="dark:text-white text-black cursor-pointer hover:font-bold">Service</li></ul>
            <ul><li className="dark:text-white text-black cursor-pointer hover:font-bold">Contact</li></ul>
        </nav>
        <button className="p-4 bg-purple-600 text-white font-semibold text-xl">Login</button>
    </div>
  )
}

export default Dropdown