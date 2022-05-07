import React, { useState } from "react";
import GenericTemplate from "../templates/GenericTemplate";

const JsonFromatPage = () => {
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
    <GenericTemplate title="JSON整形">
      <div>
        <h2>整形前</h2>
        <div>
          <textarea rows={10} onChange={handleChange}></textarea>
        </div>
        <h2>整形結果</h2>
        <pre>{formatJson}</pre>
      </div>
    </GenericTemplate>
  );
};

export default JsonFromatPage;
