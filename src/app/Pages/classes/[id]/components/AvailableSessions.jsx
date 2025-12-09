"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SessionCardDetails from "./SessionCardDetails";

// ==================== STYLED COMPONENTS ====================

const SectionContainer = styled(Box)({
  padding: "0px 100px",
  "@media (max-width: 998px)": {
    padding: "0px 30px",
  },
  "@media (max-width: 568px)": {
    padding: "20px",
  },
});

const SectionTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: 700,
  color: "#B38349",
  marginBottom: "32px",
  "@media (max-width: 768px)": {
    fontSize: "20px",
    marginBottom: "24px",
  },
});

const SessionsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px",
  "@media (max-width: 968px)": {
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
});

// ==================== COMPONENT ====================

const AvailableSessions = ({ sessions }) => {
  return (
    <SectionContainer>
      <SectionTitle>Available Sessions</SectionTitle>
      <SessionsGrid>
        {sessions.map((session) => (
          <SessionCardDetails key={session.id} session={session} />
        ))}
      </SessionsGrid>
    </SectionContainer>
  );
};

export default AvailableSessions;
