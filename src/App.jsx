import Header from "./component/Header";
import Section from "./component/Section";
import Content from "./component/Content";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(()=> {
      setTimeout(() => {
        let count = 5;
        const countdown = () => {
          for (let i = 0; i <= count; i++){
            console.log(i);
          }
  }
        countdown()
        setIsLoading(true);
      },5000);//counting for five seconds

      setIsLoading(false);
      
  }, [])
  
  return (
      <>
      {!isLoading && 
          <div className="flex items-center justify-center w-full min-h-screen bg-center bg-no-repeat bg-cover bg-background animate-bounce ease-in-out duration-75">
            <p className="font-poppins text-2xl text-white">^_^</p>
          </div>
      }
      {
        isLoading && (
          <>
            <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4">
                <div className="bg-[#F9F9F9;] w-full min-h-screen">
                    <Header />
                    <Section />
                </div>
                <Content />
                <Footer />
            </div>   
          </>
        
      )
        
      }
      
     
    </>
  )
}

export default App
