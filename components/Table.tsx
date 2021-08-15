import React, { useState, useEffect } from "react";
import { tabledata } from "../utils/types";
import { URL } from "../utils/constants";
import axios from "axios";
import Image from "next/image";
// import delete from ""
export default function Table() {
  const [state, setstate] = useState<tabledata[]>([
    {
      id: 1,
      keyword: "loading",
      goal: "loading",
      matches: 1,
      search_status: "loading",
    },
  ]);

  useEffect(() => {
    axios.get(URL).then((data) => {
      console.log(data.data);
      setstate(data.data.data);
      console.log(state);
    }).catch(err=>{
      console.log(err);
      
    });
  }, []);

  return (
    <div className="table-main">
      <table className="table-sec">
        <thead className="table-sec__head">
          <tr>
            <td>Keyword</td>
            <td></td>
            <td>Goal</td>
            <td>Matches</td>
            <td>Seacrh Status</td>
            <td>Delete Keyword</td>
          </tr>
        </thead>
        <tbody className="table-sec__body">
          {state.map((data) => {
            return (
              <tr className="table-sec__body--row">
                <td>{data.keyword}</td>
                <td>
                  <span className="search-icon">&nbsp;</span>
                </td>
                <td>{data.goal}</td>
                <td>{data.matches}</td>
                <td>{data.search_status}</td>
                <td>
                  <span className="delete-icon">&nbsp;</span>
                </td>
              </tr>
            );
          })}
        </tbody>
       
      </table>
    </div>
  );
}
