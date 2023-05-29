import React from "react";
import BabyIcon from "../assets/icon/baby-icon.svg";

const TableComponent = ({ name, handleLink, data }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mb-4">{name}</h1>

        <div className="relative  shadow-md sm:rounded-lg h-auto">
          <table className="w-full text-sm text-left text-blue-100 ">
            <thead className="text-xs text-white uppercase bg-primary border-b border-gray-200 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama {name}
                </th>
                <th scope="col" className="px-6 py-3">
                  Balita Stunting
                </th>
                <th scope="col" className="px-6 py-3">
                  Proporsi Stunting
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, id) => (
                <tr
                  onClick={() => handleLink(item.id)}
                  key={item.id}
                  className="bg-white border-b border-gray-200 hover:bg-gray-100 hover:text-white hover:cursor-pointer"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-dark whitespace-nowrap "
                  >
                    {id + 1}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-dark whitespace-nowrap "
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4 text-dark">
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-10 bg-white rounded-full p-2 ">
                        <img
                          src={BabyIcon}
                          alt="baby-icon"
                          className="w-10 h-6"
                        />
                      </div>
                      <p>{item.total}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-dark">
                    <div className="flex items-center gap-2">
                      <div
                        className={
                          item.status === "success"
                            ? "bg-green-500 rounded-full w-4 h-4"
                            : item.status === "warning"
                            ? "bg-yellow-500 rounded-full w-4 h-4"
                            : "bg-red-500 rounded-full w-4 h-4"
                        }
                      ></div>

                      <p>{item.percent}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
