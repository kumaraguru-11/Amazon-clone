import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProducts } from "../FetchingApi/API/FetchSingleProduct";
import { Rating } from "react-simple-star-rating";
import { Button, message} from "antd";

const ProductDetail = () => {
  const [addItem, setAddItem] = useState(1);

  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct.product);
  //antDesign
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Cart Added",
      style: {
        marginTop: "5vh",
      },
    });
  };

  useEffect(() => {
    dispatch(fetchSingleProducts(params.Id));
  }, [dispatch, params]);

  const handleClick = (product) => {
    // Retrieve the existing cart array from localStorage, or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.productId === product.id
    );
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      cart[existingProductIndex].quantity = addItem;
    } else {
      // If the product is not in the cart, add it to the cart array
      cart.push({ productId: product.id, quantity: addItem });
    }

    // Store the updated cart array back in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    success();
  };

  return (
    <div className="product-detail">
      <div className="product-detail-img">
        <img src={product.image} alt={product.title} />
      </div>

      {/* Products Detail*/}
      <div className="product-detail-info">
        <h3>{product.title}</h3>

        <hr />

        <Rating
          initialValue={product?.rating?.rate}
          readonly="true"
          size={20}
        />

        <hr />
        <div>
          <h4>{`$ ${product.price}`}</h4>
          <div className="my-3">
            <Button
              className="bg-danger text-light"
              onClick={() => setAddItem(addItem - 1)}
              disabled={addItem <= 1}
            >
              -
            </Button>
            <span className="mx-3">{addItem}</span>
            <Button
              type="primary"
              onClick={() => setAddItem(addItem + 1)}
              disabled={addItem >= product?.rating?.count}
            >
              +
            </Button>

            <Button
              className="ms-4 bg-warning fw-1"
              type="text"
              onClick={() => {
                handleClick(product);
              }}
              // onClick={success}
              // onClick={()=>dispatch(addCart(product.id))}
            >
              Add to Cart
            </Button>
            {contextHolder}
          </div>
        </div>

        <hr />

        <span>
          status: <span className="text-success fw-bolder">In Stock </span>
          {`(${product?.rating?.count})`}
        </span>

        <hr />

        <h5>Description:</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
