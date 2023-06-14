import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const CakupanComponent = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const url =
          "https://stunting.ahadnikah.com/api/admin/dashboard/cakupan/prevalensi?page=1";
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCount(response.data.count);
        setPageSize(response.data.page_size);
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fetchingData = async (currentPage) => {
    try {
      const token = localStorage.getItem("token");
      const url = `https://stunting.ahadnikah.com/api/admin/dashboard/cakupan/prevalensi?page=${currentPage}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (data) => {
    console.log(data.selected);
    const currentPage = data.selected + 1;
    console.log("🚀 ~currentPage:", currentPage);
    fetchingData(currentPage);
  };

  console.log("dataNew", data);
  console.log("count", count);
  console.log("PageSize", pageSize);

  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx} className="flex gap-2">
          <p>{item.id}</p>
          <p>{item.indikator}</p>
          <p>{item.nilai}</p>
        </div>
      ))}

      <div className="mt-5 flex justify-center">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(count / pageSize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          activeClassName={"bg-primary text-white"}
          containerClassName={"container flex justify-center"}
          pageClassName="p-1"
          pageLinkClassName="bg-white text-primary py-1 px-3 "
          previousClassName="p-1"
          previousLinkClassName="bg-white text-primary py-1 px-3 "
          nextClassName="p-1"
          nextLinkClassName="bg-white text-primary py-1 px-3 "
          breakClassName="p-1"
          breakLinkClassName=" text-primary py-1 px-3 "
        />
      </div>
    </div>
  );
};

export default CakupanComponent;
