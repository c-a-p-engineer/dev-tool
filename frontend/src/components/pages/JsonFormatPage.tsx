import React, { useEffect, useState } from "react";
import GenericTemplate from "../templates/GenericTemplate";

const JsonFromatPage = () => {
  // Sample JSON
  const jsonText = `{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }  
  `;
  // Text
  let [text, setText]: [string, React.Dispatch<React.SetStateAction<string>>] =
    useState<string>(jsonText);

  // JSON Format
  let [formatJson, setFormatJson]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  // Error
  let [formatError, setFormatError]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const jsonChange: React.ChangeEventHandler<HTMLTextAreaElement> = (ev) => {
    setText(ev.target.value);
  };

  useEffect(() => {
    try {
      setFormatJson(JSON.stringify(JSON.parse(text), null, "  "));
      setFormatError("");
    } catch (error) {
      console.error(error);
      setFormatError(`エラー\r\n${error}`);
    }
  }, [text]);
  return (
    <GenericTemplate title="JSON整形">
      <div>
        <h2>整形前</h2>
        <div>
          <textarea rows={10} onChange={jsonChange}>
            {text}
          </textarea>
        </div>
        <pre>{formatError}</pre>
        <h2>整形結果</h2>
        <pre>{formatJson}</pre>
      </div>
    </GenericTemplate>
  );
};

export default JsonFromatPage;
