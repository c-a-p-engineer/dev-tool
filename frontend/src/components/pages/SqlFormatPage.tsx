import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { format } from "sql-formatter";
import GenericTemplate from "../templates/GenericTemplate";

const SqlFormatPage = () => {
  const [text, setText]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("select * from tbl");

  const textChange: React.ChangeEventHandler<HTMLTextAreaElement> = (ev) => {
    setText(ev.target.value);
  };

  type SqlLanguage =
    | "sql"
    | "db2"
    | "mariadb"
    | "mysql"
    | "n1ql"
    | "plsql"
    | "postgresql"
    | "redshift"
    | "spark"
    | "tsql"
    | undefined;
  const [lang, setLang]: [
    SqlLanguage,
    React.Dispatch<React.SetStateAction<SqlLanguage>>
  ] = useState<SqlLanguage>("sql");

  const langChange = (selectLang: SqlLanguage) => {
    setLang(selectLang);
  };

  const [indent, setIndent]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("  ");

  const indentChange = (selectIndent: string) => {
    setIndent(selectIndent);
  };

  const [upper, setUpper]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const upperChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setUpper(ev.target.checked);
  };

  const [formatSql, setFormatSql]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  useEffect(() => {
    try {
      setFormatSql(
        format(text, {
          language: lang,
          indent: indent,
          uppercase: upper,
          linesBetweenQueries: 1,
        })
      );
    } catch (error) {
      console.error(error);
    }
  }, [text, lang, indent, upper]);

  return (
    <GenericTemplate title="SQL整形">
      <div>
        <h2>整形前</h2>
        <div>
          <FormControl fullWidth>
            <InputLabel id="select-sql-label">SQL</InputLabel>
            <Select
              labelId="select-sql-label"
              id="select-sql"
              label="sql"
              value={lang}
              onChange={(e) => langChange(e.target.value as SqlLanguage)}
            >
              <MenuItem value="sql">Standard SQL</MenuItem>
              <MenuItem value="mariadb">MariaDB</MenuItem>
              <MenuItem value="mysql">MySQL</MenuItem>
              <MenuItem value="postgresql">PostgreSQL</MenuItem>
              <MenuItem value="db2"> IBM DB2</MenuItem>
              <MenuItem value="plsql">Oracle PL/SQL</MenuItem>
              <MenuItem value="n1ql">Couchbase N1QL</MenuItem>
              <MenuItem value="redshift">Amazon Redshift</MenuItem>
              <MenuItem value="spark ">Spark</MenuItem>
              <MenuItem value="mariadb">MariaDB</MenuItem>
              <MenuItem value="tsql">SQL Server Transact-SQL</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-indent-label">インデント</InputLabel>
            <Select
              labelId="select-indent-label"
              id="select-indent"
              label="indent"
              value={indent}
              onChange={(e) => indentChange(e.target.value as string)}
            >
              <MenuItem value="  ">2space</MenuItem>
              <MenuItem value="    ">4space</MenuItem>
              <MenuItem value="&#009;">tab</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <FormControlLabel
              control={<Checkbox onChange={upperChange} />}
              label="大文字化"
              checked={upper}
            />
          </FormControl>
        </div>
        <div>
          <textarea onChange={textChange} rows={10}>
            {text}
          </textarea>
        </div>
        <h2>整形結果</h2>
        <SyntaxHighlighter
          language="sql"
          style={dark}
          showLineNumbers
          wrapLines
        >
          {formatSql}
        </SyntaxHighlighter>
      </div>
    </GenericTemplate>
  );
};

export default SqlFormatPage;
