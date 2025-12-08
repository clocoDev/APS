"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// ==================== STYLED COMPONENTS ====================

const BannerContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "@media (max-width: 768px)": {
    height: "200px",
  },
});

const BackgroundImage = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: 'url("/images/banner-bg.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
  },
});

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  padding: "0 20px",
});

const MainHeading = styled(Typography)({
  fontSize: "48px",
  fontWeight: 700,
  color: "#FFFFFF",
  marginBottom: "12px",
  lineHeight: 1.2,
  "@media (max-width: 968px)": {
    fontSize: "36px",
  },
  "@media (max-width: 576px)": {
    fontSize: "28px",
  },
});

const SubHeading = styled(Typography)({
  fontSize: "18px",
  fontWeight: 400,
  color: "#FFFFFF",
  lineHeight: 1.4,
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
  "@media (max-width: 576px)": {
    fontSize: "14px",
  },
});

// ==================== COMPONENT ====================

const PageBanner = ({
  title = "Discover Your Stage at APS",
  subtitle = "Transform your passion into Performance",
  backgroundImage = "/banner-bg.png",
  height = "400px",
}) => {
  return (
    <BannerContainer sx={{ height: { xs: "200px", md: height } }}>
      {/* Background Image with Overlay */}
      <BackgroundImage
        sx={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Text Content */}
      <ContentWrapper>
        <MainHeading>{title}</MainHeading>
        <SubHeading>{subtitle}</SubHeading>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default PageBanner;
