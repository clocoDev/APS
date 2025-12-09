"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// ==================== STYLED COMPONENTS ====================

const StyledTutorCard = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  "@media (max-width: 576px)": {
    gap: "16px",
  },
});

const ProfileImage = styled("img")({
  width: "100px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  flexShrink: 0,
  "@media (max-width: 576px)": {
    width: "80px",
    height: "96px",
  },
});

const TutorInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
});

const TutorName = styled(Typography)({
  fontSize: "18px",
  fontWeight: 700,
  color: "#191919",
  marginBottom: "4px",
  fontWeight: 600,
});

const TutorBio = styled(Typography)({
  fontSize: "14px",
  color: "#333333",
  lineHeight: "22px",
  marginBottom: "5px",
  lineHeight: "27px",
  fontWeight: 400,
});

const ViewProfileLink = styled(Typography)({
  fontSize: "14px",
  color: "#191919",
  fontWeight: 500,
  textDecoration: "underline",
  cursor: "pointer",
  width: "fit-content",
  "&:hover": {
    color: "#B38349",
  },
});

// ==================== COMPONENT ====================

const TutorCard = ({ tutor }) => {
  const handleViewProfile = () => {
    // Handle view profile logic
    console.log("View profile:", tutor.id);
  };

  return (
    <StyledTutorCard>
      {/* Profile Image - Oval Shape */}
      <ProfileImage src={tutor.image} alt={tutor.name} />

      {/* Tutor Info */}
      <TutorInfo>
        <TutorName>{tutor.name}</TutorName>
        <TutorBio>{tutor.bio}</TutorBio>
        <ViewProfileLink onClick={handleViewProfile}>
          View profile
        </ViewProfileLink>
      </TutorInfo>
    </StyledTutorCard>
  );
};

export default TutorCard;
