import Layout from "@/components/Layout";
import React, { useEffect, useMemo, useState } from "react";
// import useFullPageLoader from "hooks/useFullPageLoader";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { values } from "@/styles/fonts/fontawesome-free-6.0.0-web/js/v4-shims";

const Logs = () => {
  const [comments, setComments] = useState([]);

  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 7;

  // const header = [
  //   { name: "No#", field: "id" },
  //   { name: "Name", field: "name" },
  //   { name: "Email", field: "email" },
  //   { name: "Comment", field: "body" },
  // ];

  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3001/list")
        .then((response) => response.json())
        .then((json) => {
          setComments(json);
        });
    };
    getData();
  }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;

    if (search) {
      computedComments = computedComments.filter(
        (comment) =>
          comment.name.toLowerCase().includes(search.toLowerCase()) ||
          comment.id.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedComments.length);
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage, search]);

  return (
    <Layout>
      <div className="db__contents">
        {/* <!-- Search --> */}
        <Search
          onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />
        {/* <!-- Search --> */}

        <div className="db__contents-top">
          {/* <!-- Table --> */}
          <table className="db__table list" id="devicesList">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Power</th>
                <th></th>
              </tr>
            </thead>

            <tbody id="product">
              {commentsData.map((article, index) => {
                return (
                  <tr key={index}>
                    <td>{article.name}</td>
                    <td>{article.id}</td>
                    <td>{article.power}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="db__table-total">
            <span>Total: </span>
            <span className="total-item">{comments.length}</span>
          </div>
          {/* <!-- Table --> */}
        </div>

        <div className="logs__paging">
          <div className="logs__paging-wrapper">
            <ul className="logs__paging-list">
              <Pagination
                key={currentPage}
                total={totalItems}
                itemPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Logs;
