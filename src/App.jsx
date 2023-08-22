import Header from "./component/Header";
import Section from "./component/Section";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="bg-[#F9F9F9;] w-full min-h-screen">
        <Header />
        <Section />
      </div>
      <Content />
      <Footer />
     
    </div>
  )
}

export default App
