import Image from "next/image";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Testimonial from "./Components/Testimonial/Testimonial";
import Workshop from "./Components/Workshop/Workshop";
import CoursesHome from "./Components/CoursesHome/CoursesHome";
import Vision from "./Components/Vision/Vision";
import SpecialWorkshop from "./Components/SpecialWorkshop/SpecialWorkshop";
import Enquiry from "./Components/Enquiry/Enquiry";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Testimonial />
      <Workshop />
      <CoursesHome />
      <Vision />
      <SpecialWorkshop />
      <Enquiry />
    </>

  );
}
