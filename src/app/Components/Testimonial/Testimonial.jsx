"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Testimonial.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewDetails } from "@/redux/slices/testimonialSlice";

const SectionWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
});

const LeftSection = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#EAE2DA",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  overflow: "hidden",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    padding: "40px 30px 0 30px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "70px 50px 20px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "70px 50px",
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    padding: "30px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "70px 50px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "70px 50px 70px 65px",
  },
}));

const ContentBox = styled(Box)({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
});

const ApplyButton = styled(Button)({
  backgroundColor: "#B38349",
  color: "white",
  padding: "10px 32px",
  borderRadius: "25px",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  marginTop: "10px",
  "&:hover": {
    backgroundColor: "#A17F4F",
  },
});

const DecorativeElement = styled(Box)({
  position: "absolute",
  zIndex: 0,
  pointerEvents: "none",
});

const Testimonial = () => {
  const { reviews, error } = useSelector((state) => state.review);
  const [testimonials, setTestimonials] = useState(reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewDetails());
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (!reviews?.length) {
          const stored = JSON.parse(localStorage.getItem("allReviews") || "[]");
          queueMicrotask(() => setTestimonials(stored));
        } else {
          localStorage.setItem("allReviews", JSON.stringify(reviews));
        }
      } catch {
        queueMicrotask(() => setTestimonials([]));
      }
    }
  }, [reviews]);

  // const testimonials = [
  //   {
  //     text: "Acting Performance Studio has been transformative for my daughter. The teachers are incredible professionals who really care about each student. We have seen her confidence grow tremendously since starting classes here!",
  //     author: "Sarah Thompson",
  //   },
  //   {
  //     text: "My son absolutely loves his classes at APS! The instructors create such a supportive environment where every child can shine. His acting skills have improved dramatically.",
  //     author: "Michael Chen",
  //   },
  //   {
  //     text: "As a parent, I couldn't be happier with the growth I've seen in my child. The professional guidance and nurturing atmosphere make all the difference.",
  //     author: "Emma Wilson",
  //   },
  //   {
  //     text: "The passion and dedication of the teachers at APS is truly remarkable. My daughter has discovered a love for performing arts that I never knew she had!",
  //     author: "Jessica Martinez",
  //   },
  // ];

  const benefits = [
    "Flexible teaching opportunities",
    "Supportive and collaborative environment",
    "Work with students across all age groups",
  ];

  if (error) return <p>Error: {error}</p>;
  return (
    <SectionWrapper className="testimonial">
      <Stack direction={{ sm: "column", lg: "row" }}>
        <LeftSection>
          <DecorativeElement
            sx={{
              top: "30%",
              right: { sm: "25%", md: "25%", lg: "18%" },
              transform: "translateY(-50%)",
              opacity: 1,
              width: { xs: "100px", md: "100px" },
              height: { xs: "100px", md: "100px" },
            }}
          >
            <Image
              src="/vector.svg"
              alt=""
              width={100}
              height={114}
              style={{ objectFit: "contain" }}
            />
          </DecorativeElement>
          <ContentBox>
            <Typography
              variant="h6"
              sx={{
                color: "#B38349",
                fontWeight: 700,
                fontFamily: "var(--font-inter)",
                fontSize: { xs: "18px", md: "22px" },
                letterSpacing: "0.5px",
                mb: 4,
                textAlign: { xs: "center", sm: "center", lg: "right" },
                paddingTop: "10px",
              }}
            >
              WHY CHOOSE ACTING PERFORMANCE STUDIO?
            </Typography>

            {/* Testimonials Carousel */}
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 50000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "testimonial-bullet",
                bulletActiveClass: "testimonial-bullet-active",
              }}
              loop={true}
              style={{ width: "100%", paddingBottom: "10px" }}
            >
              {testimonials?.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} style={{ height: "max-content" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#181818",
                          fontFamily: "var(--font-inter)",
                          fontSize: { xs: "14px", md: "15px" },
                          lineHeight: 2.5,
                          letterSpacing: "0.5px",
                          mb: 3,
                          textAlign: {
                            xs: "center",
                            sm: "center",
                            lg: "left",
                          },
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {`"${testimonial?.text}"`}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#B38349",
                          fontFamily: "var(--font-inter)",
                          fontSize: "15px",
                          fontWeight: 600,
                          mb: 2,
                          textAlign: {
                            xs: "center",
                            sm: "center",
                            lg: "right",
                          },
                        }}
                      >
                        {testimonial?.author}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                ))
              ) : (
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#999",
                    fontStyle: "italic",
                    mt: 2,
                  }}
                >
                  No reviews available.
                </Typography>
              )}
            </Swiper>
          </ContentBox>
        </LeftSection>
        <RightSection>
          <DecorativeElement
            sx={{
              top: "50%",
              right: { xs: "-80px", md: "-120px" },
              transform: "translateY(-50%)",
              opacity: 1,
              width: { xs: "300px", md: "400px" },
              height: { xs: "300px", md: "400px" },
            }}
          >
            <Image
              src="/halfStar.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </DecorativeElement>

          <ContentBox sx={{ maxWidth: "700px" }}>
            <Typography
              variant="h2"
              sx={{
                color: "#000",
                fontWeight: 700,
                fontFamily: "var(--font-inter)",
                fontSize: { xs: "30px", md: "45px" },
                mb: 4,
              }}
            >
              Join Our Team
            </Typography>

            <Typography
              sx={{
                color: "#181818",
                fontSize: { xs: "14px", md: "15px" },
                lineHeight: 2.3,
                letterSpacing: "0.5px",
                mb: 2,
                maxWidth: "550px",
              }}
            >
              {
                "We're always looking for talented, professional acting tutors to join the APS family. Share your knowledge, inspire the next generation, and be part of a studio that values creativity and excellence."
              }
            </Typography>

            <Box sx={{ mb: 4 }}>
              {benefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <FaStar
                    size={18}
                    color="#B38349"
                    style={{
                      marginRight: "12px",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#181818",
                      fontSize: { xs: "14px", md: "15px" },
                      lineHeight: { xs: 1.5, sm: 1, md: 1.5 },
                      letterSpacing: "0.8px",
                    }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>

            <ApplyButton href="/apply">Apply Now</ApplyButton>
          </ContentBox>
        </RightSection>
      </Stack>
    </SectionWrapper>
  );
};

export default Testimonial;
