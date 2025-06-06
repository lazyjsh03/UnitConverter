// css
import "./Input.css";
// components
import InputBox from "./InputBox";

const Input = () => {
  return (
    <div className="Input">
      <InputBox text={"변환할 {}을 입력하세요"} />
      <InputBox text={"From 단위"} />
      <InputBox text={"To 단위"} />
    </div>
  );
};

export default Input;
