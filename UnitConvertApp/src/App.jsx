// css
import "./App.css";
// components
import Header from "./components/Header";
import Menu from "./components/Menu";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Input />
      <Button text={"변환"} />
    </>
  );
}

export default App;
