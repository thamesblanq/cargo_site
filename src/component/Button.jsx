import send from '../cargo-images/send-2.png';
const Button = () => {
  return (
    <button className='text-[#5A57FF] flex justify-around items-center p-4 border-2 gap-2 rounded-lg border-[#5A57FF] hover:translate-y-3 duration-500 ease-in-out'>Send a Package<img src={send}></img></button>
  )
}

export default Button