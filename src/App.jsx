import Header from "./component/Header";
import Section from "./component/Section";
import Content from "./component/Content";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
//import Loading from "./component/Loading";

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
          <div className="flex items-center justify-center w-full min-h-screen bg-black animate-bounce duration-500 ease-in-out">
                  <p className="font-bold text-4xl font-roboto text-white">^_^</p>
          </div>
      }
      {
        isLoading && (
          <>
            <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-2 md:px-0 overflow-hidden scroll-smooth">
                <div className="bg-[#F9F9F9] w-full min-h-screen px-2 md:px-4 scroll-smooth">
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
