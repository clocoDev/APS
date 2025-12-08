"use client";
import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import PageBanner from "@/app/Components/Banner/PageBanner";
import ClassFilters from "./components/ClassFilters";
import CourseCard from "./components/CourseCard";

// ==================== STYLED COMPONENTS ====================

const CoursesSection = styled(Box)({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "60px 40px",
  "@media (max-width: 1440px)": {
    padding: "60px 30px",
  },
  "@media (max-width: 968px)": {
    padding: "40px 20px",
  },
});

const CoursesGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "40px",
  "@media (max-width: 1200px)": {
    gap: "30px",
  },
  "@media (max-width: 968px)": {
    gridTemplateColumns: "1fr",
    gap: "24px",
  },
});

// ==================== SAMPLE DATA ====================

const coursesData = [
  {
    id: 1,
    title: "Kinder Kids Acting",
    description:
      "Welcome to Kinder Kids Acting at Acting Performance Studio — an engaging experience designed for 4-8 year olds with a passion for performance and creativity",
    image: "/class1.png",
    sessions: [
      {
        id: 1,
        ageRange: "4-6",
        date: "18 Oct - 6 Dec, 2025",
        time: "11:15am - 12:45pm",
        location: "Moorabbin",
        instructor: "Harrison Lane",
        description:
          "It is 45 minutes of Film & TV plus 45 minutes of Musical Theatre.",
        spotsLeft: 4,
        price: "$395.00",
      },
      {
        id: 2,
        ageRange: "4-6",
        date: "18 Oct - 6 Dec, 2025",
        time: "11:15am - 12:45pm",
        location: "Moorabbin",
        instructor: "Harrison Lane",
        description:
          "It is 45 minutes of Film & TV plus 45 minutes of Musical Theatre.",
        spotsLeft: 4,
        price: "$395.00",
      },
      {
        id: 3,
        ageRange: "4-6",
        date: "20 Oct - 8 Dec, 2025",
        time: "2:00pm - 3:30pm",
        location: "Ringwood",
        instructor: "Sarah Mitchell",
        description:
          "It is 45 minutes of Film & TV plus 45 minutes of Musical Theatre.",
        spotsLeft: 6,
        price: "$395.00",
      },
      {
        id: 4,
        ageRange: "4-6",
        date: "22 Oct - 10 Dec, 2025",
        time: "10:00am - 11:30am",
        location: "Melbourne CBD",
        instructor: "James Peterson",
        description:
          "It is 45 minutes of Film & TV plus 45 minutes of Musical Theatre.",
        spotsLeft: 2,
        price: "$395.00",
      },
    ],
  },
  {
    id: 2,
    title: "Kinder Kids Acting",
    description:
      "Welcome to Kinder Kids Acting at Acting Performance Studio — an engaging experience designed for 4-8 year olds with a passion for performance and creativity",
    image: "/class2.png",
    sessions: [
      {
        id: 1,
        ageRange: "4-6",
        date: "18 Oct - 6 Dec, 2025",
        time: "11:15am - 12:45pm",
        location: "Moorabbin",
        instructor: "Harrison Lane",
        description:
          "It is 45 minutes of Film & TV plus 45 minutes of Musical Theatre.",
        spotsLeft: 4,
        price: "$395.00",
      },
      {
        id: 2,
        ageRange: "4-6",
        date: "18 Oct - 6 Dec, 2025",
        time: "11:15am - 12:45pm",
        location: "Moorabbin",
        instructor: "Harrison Lane",
        description:
          "It is 45 minutes of Film & TV plus 45 minutes of Musical Theatre.",
        spotsLeft: 4,
        price: "$395.00",
      },
    ],
  },
  {
    id: 3,
    title: "Junior Acting Workshop",
    description:
      "An intensive workshop for young actors looking to develop their skills in stage and screen performance with professional guidance",
    image: "/class3.png",
    sessions: [
      {
        id: 1,
        ageRange: "9-12",
        date: "20 Oct - 8 Dec, 2025",
        time: "2:00pm - 4:00pm",
        location: "Ringwood",
        instructor: "Sarah Mitchell",
        description:
          "Comprehensive training in screen acting techniques and audition preparation.",
        spotsLeft: 8,
        price: "$425.00",
      },
    ],
  },
  {
    id: 4,
    title: "Teen Musical Theatre",
    description:
      "Perfect for teenagers passionate about musical theatre, combining singing, dancing, and acting in a supportive environment",
    image: "/class4.png",
    sessions: [
      {
        id: 1,
        ageRange: "13-17",
        date: "22 Oct - 10 Dec, 2025",
        time: "4:30pm - 6:30pm",
        location: "Melbourne CBD",
        instructor: "James Peterson",
        description:
          "Learn choreography, vocal techniques, and character development for musical theatre.",
        spotsLeft: 2,
        price: "$450.00",
      },
    ],
  },
];

const ClassesPage = () => {
  const [activeFilters, setActiveFilters] = useState({
    courseCategory: "",
    ageCategory: "",
    location: "",
  });

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    console.log("Active filters:", filters);
  };

  return (
    <Box>
      {/* Page Banner */}
      <PageBanner
        title="Discover Your Stage at APS"
        subtitle="Transform your passion into Performance"
        backgroundImage="/banner-bg.png"
      />

      {/* Class Filters */}
      <ClassFilters onFilterChange={handleFilterChange} />

      {/* Courses Grid */}
      <CoursesSection>
        <CoursesGrid>
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </CoursesGrid>
      </CoursesSection>
    </Box>
  );
};

export default ClassesPage;
