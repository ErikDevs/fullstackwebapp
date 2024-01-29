import "./globals.css";
import {
  Product,
  Navbar,
  HeroBanner,
  FooterBanner,
  Cart,
  Footer,
} from "@/components";

import { client } from "@/sanity/lib/client";

export async function getData() {
  const query = `*[_type == "product"]`;
  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery, {
    cache: "no-store",
  });
  const products = await client.fetch(query, {
    cache: "no-store",
  });

  return { products, bannerData };
}

async function Home() {
  const { products, bannerData } = await getData();

  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakes of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export default Home;
