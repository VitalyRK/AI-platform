import Header from "@/ui/Header";
import GlobalStyles from "./styles/GlobalStyles";
import HomeContent from "./ui/HomeContent";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <div className="logo"></div> */}
      <Header />
      <HomeContent />
    </>
  );
}

export default App;
