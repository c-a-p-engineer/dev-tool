import React, { useState } from "react";
import GenericTemplate from "../templates/GenericTemplate";

const UnixTimePage = () => {
  // Now
  const now = new Date();

  // タイムゾーン
  let [timezoneOffset, setTimezoneOffset]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>((now.getTimezoneOffset() / -60).toString());

  const timezoneOffsetChange: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    try {
      // タイムゾーン設定
      let offset = ev.target.value;
      if (Number.isNaN(offset)) {
        offset = "0";
      }
      setTimezoneOffset(offset);
      // 時刻表示を変更
      let datetime = new Date(datetimeText);
      datetime.setHours(datetime.getHours() + parseInt(offset));
      setDatetimeText(datetime.toISOString().substring(0, 19));
    } catch (error) {
      console.error(error);
    }
  };

  // 時刻
  let [datetimeText, setDatetimeText]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>(() => {
    let datetime = now;
    datetime.setHours(datetime.getHours() + parseInt(timezoneOffset));
    return datetime.toISOString().substring(0, 19);
  });
  const datetimeChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    try {
      // 時刻表示
      setDatetimeText(ev.target.value);
      // Unix Time変更
      setUnixtime(
        Math.floor(new Date(ev.target.value).getTime() / 1000).toString()
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Unix Time
  let [unixtime, setUnixtime]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>(Math.floor(now.getTime() / 1000).toString());

  const unixtimeChange: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    try {
      // Unix Time
      setUnixtime(ev.target.value);
      // 時刻表示を変更
      let datetime = new Date(parseInt(ev.target.value) * 1000);
      datetime.setHours(datetime.getHours() + parseInt(timezoneOffset));
      setDatetimeText(datetime.toISOString().substring(0, 19));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GenericTemplate title="Unix Time変換">
      <div>
        <h2>UTC 時差（タイムゾーン）</h2>
        <input
          type="number"
          step={1}
          min={-12}
          max={12}
          value={timezoneOffset}
          onChange={timezoneOffsetChange}
        ></input>
        <h2>時刻表示</h2>
        <input
          type="datetime-local"
          step={1}
          value={datetimeText}
          onChange={datetimeChange}
        ></input>
        <h2>Unix Time</h2>
        <input
          type="number"
          step={0.25}
          value={unixtime}
          onChange={unixtimeChange}
        ></input>
      </div>
    </GenericTemplate>
  );
};

export default UnixTimePage;
