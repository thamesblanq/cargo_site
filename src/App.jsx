import Header from "./component/Header";
import Section from "./component/Section";
import Content from "./component/Content";

function App() {
  
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      <div className="bg-[#F9F9F9;] w-full min-h-screen">
        <Header />
        <Section />
      </div>
      <Content />
     
    </div>
  )
}

export default App
