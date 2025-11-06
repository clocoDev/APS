import Image from "next/image";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Testimonial from "./Components/Testimonial/Testimonial";
import Workshop from "./Components/Workshop/Workshop";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Testimonial />
      <Workshop />
    </>

  );
}
