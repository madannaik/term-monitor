import React from "react";
import Table from "./Table";
import Image from "next/image";
import search from "../images/search.svg";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>KEYWORDS</h1>
        <div className="input-submit">
          <input name="submit" id="submit" />
          <label htmlFor="submit" className="input-label">
            submit &rarr;
          </label>
        </div>
        <span>
          <h1>A</h1>
        </span>
      </div>
      <div className="dashboard__keyword">
        <h1>Add Another keyword &nbsp;</h1>
        <h1>1/3</h1>
        <h1>upgrade</h1>
        <h1>Advance Search</h1>
      </div>
      <div className="dashboard__search">
        <input
          placeholder="Enter your filtes here"
          className="dashboard__search--input"
          id="search-input"
        ></input>
        <label className="dashboard__search--label" htmlFor="search-input">
          Save Filter
        </label>
      </div>
      <div className="dashboard__table--heading">
        <h1>The terms you are tracking</h1>
        <h1>The data will refresh every 5 min</h1>
      </div>
      <Table />
      <div className="dashboard__button">
        <a href="#">View results</a>
      </div>
    </div>
  );
};

export default Dashboard;
