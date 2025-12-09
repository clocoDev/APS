"use client";
import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";

// ==================== STYLED COMPONENTS ====================

const StyledSessionCard = styled(Box)({
  border: "1px solid #E5E5E5",
  borderRadius: "12px",
  padding: "20px",
  backgroundColor: "#FFFFFF",
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  height: "100%",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
  "@media (max-width: 576px)": {
    flexDirection: "column",
  },
});

const LeftSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

const RightSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
  minWidth: "140px",
  "@media (max-width: 576px)": {
    flexDirection: "row",
    alignItems: "flex-end",
    minWidth: "auto",
    gap: "10px",
    marginTop: "10px",
  },
});

const AgeChip = styled(Chip)({
  backgroundColor: "#FFFFFF",
  border: "1px solid #E85A4F",
  color: "#E85A4F",
  fontSize: "11px",
  fontWeight: 600,
  height: "24px",
  "& .MuiChip-label": {
    padding: "0 10px",
  },
  "@media (max-width: 576px)": {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
});

const SessionDetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "12px",
});

const SessionDetail = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const DetailText = styled(Typography)({
  fontSize: "13px",
  color: "#191919",
  fontWeight: 400,
  lineHeight: "18px",
});

const SessionDescription = styled(Typography)({
  fontSize: "11px",
  color: "#333333",
  fontWeight: 400,
});

const SpotsText = styled(Typography)({
  fontSize: "11px",
  color: "#191919",
  fontWeight: 400,
  textAlign: "right",
  "@media (max-width: 576px)": {
    position: "absolute",
    bottom: "48px",
  },
});

const Price = styled(Typography)({
  fontSize: "18px",
  fontWeight: 700,
  color: "#E85A4F",
});

const EnrollButton = styled(Button)({
  backgroundColor: "#B38349",
  color: "#FFFFFF",
  textTransform: "none",
  fontSize: "13px",
  fontWeight: 600,
  padding: "3px 25px",
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: "#a07d5a",
  },
});

// ==================== COMPONENT ====================

const SessionCardDetails = ({ session }) => {
  return (
    <StyledSessionCard>
      {/* Left Section */}
      <LeftSection>
        {/* Session Details */}
        <SessionDetailsContainer>
          {/* Date */}
          <SessionDetail>
            <IconCalendar size={16} color="#E85A4F" strokeWidth={2} />
            <DetailText>{session.date}</DetailText>
          </SessionDetail>

          {/* Time */}
          <SessionDetail>
            <IconClock size={16} color="#E85A4F" strokeWidth={2} />
            <DetailText>{session.time}</DetailText>
          </SessionDetail>

          {/* Location */}
          <SessionDetail>
            <IconMapPin size={16} color="#E85A4F" strokeWidth={2} />
            <DetailText>{session.location}</DetailText>
          </SessionDetail>

          {/* Instructor */}
          <SessionDetail>
            <IconUser size={16} color="#E85A4F" strokeWidth={2} />
            <DetailText>{session.instructor}</DetailText>
          </SessionDetail>
        </SessionDetailsContainer>

        {/* Session Description */}
        <SessionDescription>{session.description}</SessionDescription>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        {/* Age Chip */}
        <AgeChip label={`Ages ${session.ageRange}`} />

        {/* Price */}
        <Price>{session.price}</Price>

        {/* Spots Available */}
        <SpotsText>{session.spotsLeft} spots available</SpotsText>

        {/* Enroll Button */}
        <EnrollButton>Enroll Now</EnrollButton>
      </RightSection>
    </StyledSessionCard>
  );
};

export default SessionCardDetails;
