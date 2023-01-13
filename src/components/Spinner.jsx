import "./spinner.css";

export default function Spinner() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
