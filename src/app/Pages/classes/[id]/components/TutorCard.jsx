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
});

const TutorBio = styled(Typography)({
  fontSize: "14px",
  color: "#666666",
  lineHeight: "22px",
  marginBottom: "8px",
});

const ViewProfileLink = styled("span")({
  fontSize: "14px",
  color: "#191919",
  fontWeight: 600,
  textDecoration: "underline",
  cursor: "pointer",
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
