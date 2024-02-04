import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Categories from "@/components/Categories/Categories";
import firstinfo from "../assets/firstinfo.png";
import secondinfo from "../assets/secondinfo.png";
import ShopNow from "@/components/ShopNow/ShopNow";
import Featured from "@/components/Featured/Featured";
import TimeOffer from "@/components/TimeOffer/TimeOffer";
import HotProducts from "@/components/HotProducts/HotProducts";
import Delivery from "@/components/Delivery/Delivery";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <Hero />
        <Categories />
        <div className={styles.shopNowCards}>
          <ShopNow
            imageUrl={firstinfo.src}
            itemHeader="Fresh Fruit"
            itemDesc="Fresh Summer With Just $200.99"
            textColor="white"
          />
          <ShopNow
            imageUrl={secondinfo.src}
            itemHeader="Fresh Fruit"
            itemDesc="Fresh Summer With Just $200.99"
            textColor="black"
          />
        </div>
        <Featured />
      </MaxWidthWrapper>
      <TimeOffer />
      <MaxWidthWrapper>
        <HotProducts />
      </MaxWidthWrapper>
      <Delivery />
      <MaxWidthWrapper>
        <Testimonials />
      </MaxWidthWrapper>
    </main>
  );
}
