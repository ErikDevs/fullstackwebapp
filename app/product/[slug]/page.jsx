import { getData } from "@/app/page";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Product } from "@/components";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";

export default async function Page({ params }) {
  async function getDataOne() {
    const query = `*[_type == "product" && slug.current == '${params.slug}']`;
    const product = await client.fetch(query);
    return product;
  }
  const product = await getDataOne();
  const { products } = await getData();
  let index = 0;

  return (
    <div>
      {product?.map((item) => (
        <div className="product-detail-container">
          <div className="image-container">
            <img
              className="product-detail-image"
              src={urlForImage(item.image[index])}
            />
            <div className="small-images-container">
              {item.image.map((item, i) => (
                <img
                  src={urlForImage(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  alt="product-image"
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{item.name}</h1>
            <div className="reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p>(20)</p>
            </div>
            <h4>Details:</h4>
            <p>{item.details}</p>
            <p className="price">${item.price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick="">
                  <AiOutlineMinus />
                </span>
                <span className="num" onClick="">
                  0
                </span>
                <span className="plus" onClick="">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart" onClick="">
                Add to Cart
              </button>
              <button type="button" className="buy-now" onClick="">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
