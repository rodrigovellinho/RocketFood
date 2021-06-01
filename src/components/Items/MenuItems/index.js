import React, { useState } from "react";
import SingleItem from "../SingleItem";
import styles from "./styles.module.css";
import ReactPaginate from "react-paginate";

function MenuItems(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;
  const itemsVisited = pageNumber * itemsPerPage;

  const productsList = props.filteredProducts.map((product) => (
    <SingleItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  const pageCount = Math.ceil(productsList.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const paginationProductList = productsList.slice(
    itemsVisited,
    itemsVisited + itemsPerPage
  );

  return (
    <div>
      <div className={styles.container}>{paginationProductList}</div>
      <div className={styles.pagination}>
        <ReactPaginate
          previousLabel={styles.previous}
          nextLabel={styles.next}
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={changePage}
          containerClassName={styles.paginationBtn}
          previousClassName={styles.previousBtn}
          nextClassName={styles.nextBtn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>
    </div>
  );
}

export default MenuItems;
