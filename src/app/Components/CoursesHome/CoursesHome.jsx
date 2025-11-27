"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Skeleton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "@/redux/slices/courseSlice";

const CourseSkeleton = () => {
  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
      }}
    >
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Skeleton variant="rectangular" height={220} />
        <div style={{ padding: "16px" }}>
          <Skeleton width="40%" height={20} style={{ marginTop: 10 }} />
          <Skeleton width="80%" height={26} style={{ marginTop: 10 }} />
          <Skeleton width="100%" height={18} style={{ marginTop: 10 }} />
          <Skeleton width="70%" height={18} style={{ marginTop: 6 }} />
          <Skeleton
            variant="rectangular"
            width={100}
            height={30}
            style={{ marginTop: 20, borderRadius: 6 }}
          />
        </div>
      </div>
    </Grid>
  );
};

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
  const { courses, loading, error } = useSelector((state) => state.course);
  const [coursesList, setCoursesList] = useState(courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (courses?.length > 0) {
          const courseItems = JSON.parse(
            localStorage.getItem("allCourses") || "[]"
          );
          queueMicrotask(() =>
            setCoursesList(courseItems.filter((item) => item.inHomePage))
          );
        } else {
          localStorage.getItem("allCourses", JSON.stringify(courses) || "[]");
        }
      } catch {
        queueMicrotask(() => setCoursesList([]));
      }
    }
  }, [courses]);

  if (loading) {
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
              {Array.from({ length: 3 }).map((_, i) => (
                <CourseSkeleton key={i} />
              ))}{" "}
            </Grid>
          </GridBox>
        </Container>
      </SectionWrapper>
    );
  }

  if (error) return <p>Error: {error}</p>;

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
            {coursesList &&
              coursesList.length > 0 &&
              coursesList?.map((course) => (
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                    lg: 4,
                  }}
                  key={course?.id}
                >
                  <CourseCard>
                    <CourseImageWrapper>
                      <Image
                        src={course?.mediaUrl}
                        alt={course?.title}
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
                      <AgeLabel>AGES {course?.ageRange}</AgeLabel>
                      <CourseTitle>{course?.title}</CourseTitle>
                      <CourseDescription>
                        {course?.description}
                      </CourseDescription>
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
