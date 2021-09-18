import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const axios = require("axios").default;

function Table(props) {
  const [dataToUse, setDataToUse] = useState({ results: null });
  const [filteredData, setFilteredData] = useState("");
  const filterData = (e) => {
    let results = [];
    results = filteredData.results.filter(
      (user) =>
        user.name.first.toLowerCase().search(e.target.value.toLowerCase()) != -1
    );
    setDataToUse({ results });
  };
  const filterName = () => {
    let results = [];
    results = filteredData.results.sort((a, b) => {
      return a.dob.age - b.dob.age;
    });
    setDataToUse({ results });
  };
  const getData = async () => {
    fetch("https://randomuser.me/api/?results=20")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setDataToUse(data);
        setFilteredData(data);
        return "done";
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="w-1/2 h-180/2 absolute centerHorizontal sm2:p-5 lg3:w-3/5 lg2:w-3/4 lg1:w-180/2">
      <div className="w-full h-full relative">
        <div className="w-full h-180/2 centerSom bg-white">
          <div
            className="
        w-full
        h-20/2
        bg-white
        rounded-2xl
        relative
        sm3:h-24/2
        usm:h-1/3
      "
          >
            <div
              className="
          w-full
          h-1/2
          px-3
          absolute
          centerVertical
          grid grid-cols-7
          gap-4
          lg1:w-full
          sm3:w-full sm3:ml-0 sm3:gap-1 sm3:h-4/5
          sm2:w-full sm2:ml-0 sm2:gap-1
        "
            >
              <input
                type="text"
                className="
            col-span-3
            h-full
            px-2
            w-full
            rounded-md
            border border-gray-300
            shadow-sm
            focus:border-green-400
            usm:col-span-6
          "
                onChange={(e) => filterData(e)}
                placeholder=""
              />
            </div>
          </div>
          <div className="w-full mb-8 overflow-hidden shadow-lg">
            <div className="w-full md2:overflow-x-auto">
              <table className="w-full h-auto relative">
                <thead className="w-full">
                  <tr
                    className="
                text-md
                h-auto
                font-semibold
                tracking-wide
                text-left text-gray-900
                bg-gray-100
                uppercase
                border-b border-gray-600
              "
                  >
                    <th className="px-4 py-3 ">Name</th>
                    <th className="px-4 py-3">Cell</th>
                    <th className="px-4 py-3">Email</th>
                    <th
                      className="px-4 py-3 cursor-pointer"
                      onClick={() => filterName()}
                    >
                      Age
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {console.log(dataToUse)}
                  {dataToUse.results !== null
                    ? dataToUse.results.map((user) => (
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src={user.picture.medium}
                                  alt=""
                                  loading="lazy"
                                />
                                <div
                                  className="absolute inset-0 rounded-full shadow-inner"
                                  aria-hidden="true"
                                ></div>
                              </div>
                              <div>
                                <p className="font-semibold text-black">
                                  {user.name.first}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">
                            {user.phone}
                          </td>
                          <td className="px-4 py-3 border text-md font-semibold ">
                            {user.email}
                          </td>
                          <td className="px-4 py-3 text-sm border">
                            {user.dob.age}
                          </td>
                        </tr>
                      ))
                    : " "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

Table.propTypes = {};

export default Table;
