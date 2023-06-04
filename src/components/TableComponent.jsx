import React from "react";

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
                  No.
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
                    className="px-6 py-4 font-medium text-dark whitespace-nowrap "
                  >
                    {id + 1}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-dark whitespace-nowrap "
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4 text-dark">
                    <div className="flex gap-2 items-center">
                      <p className="font-bold">{item.total}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-dark">
                    <div className="flex items-center gap-2">
                      <p
                        className={
                          item.status === "success"
                            ? "text-green-500 font-bold"
                            : item.status === "warning"
                            ? "text-yellow-500 font-bold"
                            : "text-red-500 font-bold"
                        }
                      >
                        {item.percent}
                      </p>
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
