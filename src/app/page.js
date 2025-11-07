import Image from "next/image";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Testimonial from "./Components/Testimonial/Testimonial";
import Workshop from "./Components/Workshop/Workshop";
import CoursesHome from "./Components/CoursesHome/CoursesHome";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Testimonial />
      <Workshop />
      <CoursesHome />
    </>

  );
}
