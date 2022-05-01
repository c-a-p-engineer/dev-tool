import React, { useState } from "react";

const App = () => {
  return <JsonFromatComponent />;
};

const JsonFromatComponent = () => {
  let [formatJson, setFormatJson]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (ev) => {
    console.log(ev.target.value);
    try {
      console.log(JSON.stringify(ev.target.value, null, "  "));
      setFormatJson(JSON.stringify(JSON.parse(ev.target.value), null, "  "));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>JSON整形</h2>
      <div>
        <textarea onChange={handleChange}></textarea>
      </div>
      <h2>整形結果</h2>
      <pre>{formatJson}</pre>
    </div>
  );
};
export default App;