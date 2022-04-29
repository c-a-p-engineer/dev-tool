import React from "react";

const App = () => {
  return <JsonFromatComponent text="" />;
};

type Props = {
  text: string;
};

const JsonFromatComponent = (props: Props) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (ev) => {
    props = Object.freeze({ text: ev.target.value });
    console.log(ev.target.value);
    console.log(props);
    try {
      console.log(JSON.stringify(ev.target.value, null, "  "));
      // document.getElementById("toJson").innerHTML = JSON.stringify(
      //   JSON.parse(ev.target.value),
      //   null,
      //   "  "
      // );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>JSON整形</h2>
      <div>
        <textarea id="fromJson" onChange={handleChange}></textarea>
      </div>
      <h2>整形結果</h2>
      <pre id="toJson"></pre>
    </div>
  );
};
export default App;
