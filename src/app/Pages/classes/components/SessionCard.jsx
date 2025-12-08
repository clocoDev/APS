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
  borderRadius: "16px",
  padding: "24px 15px 20px",
  backgroundColor: "#FFFFFF",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  // height: "100%",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
});

const AgeChip = styled(Chip)({
  position: "absolute",
  top: "12px",
  right: "15px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E85A4F",
  color: "#E85A4F",
  fontSize: "10px",
  fontWeight: 600,
  height: "20px",
  "& .MuiChip-label": {
    padding: "0 8px",
  },
});

const SessionDetail = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  marginBottom: "10px",
});

const DetailText = styled(Typography)({
  fontSize: "12px",
  color: "#181818",
  fontWeight: 500,
});

const SessionDescription = styled(Typography)({
  fontSize: "11px",
  color: "#333333",
  paddingBottom: "15px",
  borderBottom: "1px solid #E5E5E5",
});

const PriceAndButton = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  marginTop: "15px",
});

const Price = styled(Typography)({
  fontSize: "13px",
  fontWeight: 700,
  color: "#EE5B54",
});

const EnrollButton = styled(Button)({
  backgroundColor: "#B38349",
  color: "#FFFFFF",
  textTransform: "none",
  fontSize: "12px",
  fontWeight: 600,
  padding: "3px 25px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#a07d5a",
  },
});

// ==================== COMPONENT ====================

const SessionCard = ({ session }) => {
  return (
    <StyledSessionCard>
      {/* Age Chip */}
      <AgeChip label={`Ages ${session.ageRange}`} />

      {/* Date */}
      <SessionDetail>
        <IconCalendar size={15} color="#E85A4F" />
        <DetailText>{session.date}</DetailText>
      </SessionDetail>

      {/* Time */}
      <SessionDetail>
        <IconClock size={15} color="#E85A4F" />
        <DetailText>{session.time}</DetailText>
      </SessionDetail>

      {/* Location */}
      <SessionDetail>
        <IconMapPin size={15} color="#E85A4F" />
        <DetailText>{session.location}</DetailText>
      </SessionDetail>

      {/* Instructor */}
      <SessionDetail>
        <IconUser size={15} color="#E85A4F" />
        <DetailText>{session.instructor}</DetailText>
      </SessionDetail>

      {/* Session Description */}
      <SessionDescription>{session.description}</SessionDescription>

      {/* Price and Enroll Button */}
      <PriceAndButton>
        <Price>{session.price}</Price>
        <EnrollButton>Enroll Now</EnrollButton>
      </PriceAndButton>
    </StyledSessionCard>
  );
};

export default SessionCard;
