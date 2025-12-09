"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TutorCard from "./TutorCard";

// ==================== STYLED COMPONENTS ====================

const SectionContainer = styled(Box)({
  padding: "20px 100px",
  "@media (max-width: 998px)": {
    padding: "10px 30px",
  },
  "@media (max-width: 568px)": {
    padding: "20px",
  },
});

const TutorsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "40px",
  "@media (max-width: 968px)": {
    gridTemplateColumns: "1fr",
    gap: "24px",
  },
});

// ==================== COMPONENT ====================

const TutorsSection = ({ tutors }) => {
  return (
    <SectionContainer>
      <TutorsGrid>
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </TutorsGrid>
    </SectionContainer>
  );
};

export default TutorsSection;
