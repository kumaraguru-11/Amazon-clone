import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";

const { Meta } = Card;

const ProductList = ({ productList }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList && productList.slice(itemOffset, endOffset);
  const pageCount = productList
    ? Math.ceil(productList.length / itemsPerPage)
    : 1;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {/* className="d-flex flex-column pt-2" */}
      <div className="row gap-2 justify-content-center">
        {currentItems &&
          currentItems.map((item) => (
            <Card
              className="col-md-6 col-sm-6 col-lg-4 mb-4"
              key={item.title}
              hoverable
              style={{ maxWidth: "20rem", border: "1px solid black" }}
              cover={
                <img
                  alt="example"
                  src={item.image && item.image}
                  style={{
                    height: "14rem",
                    objectFit: "fill",
                    width: "80%",
                    paddingTop: "1rem",
                    margin: "auto",
                  }}
                />
              }
            >
              <Meta title={item.title} />
              <Rating
                initialValue={item.rating.rate}
                readonly="true"
                size={20}
                className="mt-2"
              />
              <p className="mt-2 fs-5">{`$${item.price}`}</p>
              <Link
                to={`/product/${item.id}`}
                className="d-flex justify-content-center"
              >
                <Button>view product</Button>
              </Link>
            </Card>
          ))}
      </div>
      {productList.length > 4 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      )}
    </div>
  );
};

export default ProductList;
