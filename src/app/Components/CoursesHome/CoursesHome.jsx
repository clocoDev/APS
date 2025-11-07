"use client";
import React from "react";
import { Box, Container, Typography, Button, Grid, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#FFFFFF",
  padding: "80px 100px",
  overflow: "hidden",
  [theme.breakpoints.between(900, 1200)]: {
    padding: "80px 30px",
  },
  [theme.breakpoints.between(0, 900)]: {
    padding: "50px 20px",
  },
}));

const DecorativeStar = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-65px",
  left: "-75px",
  width: "200px",
  height: "200px",
  opacity: 1,
  zIndex: 0,
  [theme.breakpoints.between(900, 1200)]: {
    width: "150px",
    height: "150px",
    left: "-30px",
  },
  [theme.breakpoints.between(0, 900)]: {
    width: "100px",
    height: "100px",
    left: "-15px",
    top: "-38px",
  },
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.between(0, 900)]: {
    marginBottom: "20px",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#181818",
  fontFamily: "var(--font-inter)",
  fontSize: "35px",
  fontWeight: 700,
  [theme.breakpoints.between(0, 600)]: {
    fontSize: "25px",
  },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#B38349",
  fontFamily: "var(--font-inter)",
  color: "#FFFFFF",
  padding: "8px 40px",
  borderRadius: "25px",
  fontSize: "15px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#A17F4F",
  },
  [theme.breakpoints.between(0, 600)]: {
    padding: "4px 20px",
    fontSize: "14px",
  },
}));

const CourseCard = styled(Card)({
  position: "relative",
  height: "100%",
  borderRadius: "0",
  overflow: "visible",
  border: "1px solid #D9D9D9",
  background: "#FFFFFF",
  boxShadow: "none",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  },
});

const CourseImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: "250px",
  overflow: "hidden",
});

const CardStar = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "22px",
  left: "0px",
  zIndex: 2,
  [theme.breakpoints.up("xs")]: {
    width: "30px",
    height: "30px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40px",
    height: "40px",
  },
}));

const CourseContent = styled(Box)({
  position: "relative",
  padding: "25px 25px 25px 45px",
});

const GridBox = styled(Box)(({ theme }) => ({
  paddingLeft: "30px",
  [theme.breakpoints.between(0, 1200)]: {
    paddingLeft: "0px",
  },
}));

const AgeLabel = styled(Typography)({
  color: "#181818",
  fontFamily: "var(--font-inter)",
  fontSize: "12px",
  fontWeight: 600,
});

const CourseTitle = styled(Typography)({
  color: "#181818",
  fontFamily: "var(--font-inter)",
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "12px",
});

const CourseDescription = styled(Typography)({
  color: "#181818",
  fontFamily: "var(--font-inter)",
  fontSize: "14px",
  marginBottom: "10px",
  minHeight: "60px",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const TrialLink = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: "5px",
  color: "#EE5B54",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 800,
  cursor: "pointer",
  transition: "gap 0.3s ease",
  "&:hover": {
    gap: "12px",
  },
});

const CoursesHome = () => {
  const courses = [
    {
      id: 1,
      title: "Kids Acting Classes",
      ageRange: "AGES 7 - 12",
      description:
        "Fun, creative classes for children aged 7-12. Boost confidence, imagination and social skills.",
      image: "/course1.png",
      link: "/",
    },
    {
      id: 2,
      title: "Teens Acting Classes",
      ageRange: "AGES 13 - 17",
      description:
        "Develop performance techniques, build confidence and prepare for auditions. Create skill reels for social media.",
      image: "/course2.png",
      link: "/",
    },
    {
      id: 3,
      title: "Adults Acting Classes",
      ageRange: "AGES 18+",
      description:
        "From beginners to experienced actors, our adult classes cater to all levels with professional techniques.",
      image: "/course3.png",
      link: "/",
    },
    {
      id: 4,
      title: "Musical Theatre - Juniors",
      ageRange: "AGES 4 - 6",
      description:
        "Introduce young performers to music, movement, and creative expression through musical theatre.",
      image: "/course4.png",
      link: "/",
    },
    {
      id: 5,
      title: "Musical Theatre - Kids",
      ageRange: "AGES 7 - 12",
      description:
        "Singing, dancing, and acting combined in a fun environment to develop triple-threat performers.",
      image: "/course5.png",
      link: "/",
    },
    {
      id: 6,
      title: "Musical Theatre - Teens",
      ageRange: "AGES 13 - 17",
      description:
        "Advanced musical performance skills for teens, including vocal technique, choreography, and scene work.",
      image: "/course6.png",
      link: "/",
    },
  ];

  return (
    <SectionWrapper>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <DecorativeStar>
          <Image
            src="/courseStar.svg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </DecorativeStar>
        <HeaderWrapper>
          <SectionTitle variant="h2">Our Courses</SectionTitle>
          <ViewAllButton href="/">View All</ViewAllButton>
        </HeaderWrapper>

        {/* Course Cards */}
        <GridBox>
          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 4,
                }}
                key={course.id}
              >
                <CourseCard>
                  <CourseImageWrapper>
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </CourseImageWrapper>

                  {/* Course Content */}
                  <CourseContent>
                    <CardStar>
                      <Image
                        src="/secureStar.png"
                        alt=""
                        width={40}
                        height={40}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </CardStar>
                    <AgeLabel>{course.ageRange}</AgeLabel>
                    <CourseTitle>{course.title}</CourseTitle>
                    <CourseDescription>{course.description}</CourseDescription>
                    <TrialLink>
                      Trial Now
                      <FaArrowRight size={14} />
                    </TrialLink>
                  </CourseContent>
                </CourseCard>
              </Grid>
            ))}
          </Grid>
        </GridBox>
      </Container>
    </SectionWrapper>
  );
};

export default CoursesHome;
