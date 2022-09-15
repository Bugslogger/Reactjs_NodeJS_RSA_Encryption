import "./App.css";
import CommandLine from "./component/CommandLine";
import EncryptingData from "./component/EncryptingData";
import Header from "./component/Header";
import Info from "./component/Info";

function App() {
  return (
    <div className="app">
      <Header
        object={[
          { link: "https://github.com/Bugslogger", name: "Github" },
          { link: "https://instagram.com/sarfarajshah_", name: "Instagram" },
          { link: "https://discord.com/invite/twGG3zeXQM", name: "Discord" },
          { link: "https://website/sarfarajshah.web.app", name: "website" },
        ]}
      />
      <Info />
      <CommandLine />
      <EncryptingData />
    </div>
  );
}

export default App;
