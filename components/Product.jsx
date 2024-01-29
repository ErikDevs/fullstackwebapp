import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const Product = ({ product: { image, name, price, slug } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlForImage(image[0])}
            width={250}
            height={250}
            alt="product-image"
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-name">$ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
