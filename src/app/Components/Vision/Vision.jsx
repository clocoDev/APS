"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import VisionBg from "../../../../public/visionBg.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchVision } from "@/redux/slices/visionSlice";

const SectionWrapper = styled(Box)({
  position: "relative",
  padding: "80px 0",
  backgroundImage: `url(${VisionBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
});

const ContentWrapper = styled(Container)({
  position: "relative",
  zIndex: 1,
});

const CircularImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "420px",
  height: "420px",
  margin: "0 auto",
  overflow: "hidden",
  [theme.breakpoints.between(0, 1210)]: {
    maxWidth: "340px",
    height: "340px",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  maxWidth: "700px",
  paddingLeft: "40px",
  [theme.breakpoints.between(0, 900)]: {
    maxWidth: "100%",
    paddingLeft: "0px",
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-great-vibes)",
  fontSize: "73px",
  fontWeight: 400,
  color: "#191919",
  marginBottom: "15px",
  textAlign: "left",
  [theme.breakpoints.between(900, 1210)]: {
    fontSize: "55px",
  },
  [theme.breakpoints.between(0, 900)]: {
    textAlign: "center",
  },
  [theme.breakpoints.between(550, 700)]: {
    fontSize: "55px",
  },
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "45px",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-inter)",
  fontSize: "18px",
  fontWeight: 700,
  color: "#B38349",
  marginBottom: "15px",
  lineHeight: 1.8,
  letterSpacing: "0.8px",
  [theme.breakpoints.between(0, 900)]: {
    textAlign: "center",
  },
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "16px",
  },
}));

const RichTextContainer = styled(Box)(({ theme }) => ({
  fontFamily: "var(--font-inter)",
  fontSize: "16px",
  color: "#181818",
  lineHeight: "30px",
  marginBottom: "15px",
  letterSpacing: "0.72px",
  "& p": {
    margin: "0 0 15px 0",
  },
  "& strong": {
    fontWeight: 700,
  },
  "& em": {
    fontStyle: "italic",
  },
  "& u": {
    textDecoration: "underline",
  },
  "& ul, & ol": {
    marginLeft: "20px",
    marginBottom: "15px",
  },
  "& li": {
    marginBottom: "8px",
  },
  "& br": {
    display: "block",
    content: '""',
    marginTop: "8px",
  },
  [theme.breakpoints.between(0, 900)]: {
    textAlign: "center",
  },
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "14px",
  },
}));

const ViewMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#B38349",
  color: "white",
  padding: "8px 35px",
  borderRadius: "25px",
  fontFamily: "var(--font-inter)",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  marginTop: "15px",
  alignSelf: "flex-start",
  "&:hover": {
    backgroundColor: "#A17F4F",
  },
  [theme.breakpoints.between(0, 900)]: {
    alignSelf: "center",
  },
}));

const Vision = () => {
  const dispatch = useDispatch();
  const { vision, loading } = useSelector((state) => state.vision);

  useEffect(() => {
    dispatch(fetchVision());
  }, [dispatch]);

  if (loading || !vision) return null;

  return (
    <SectionWrapper>
      <ContentWrapper maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Left Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <CircularImageWrapper>
              <Image
                src={vision.mediaUrl}
                alt={vision.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </CircularImageWrapper>
          </Grid>

          {/* Right Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ContentBox>
              <MainTitle variant="h1">{vision.title}</MainTitle>

              <Subtitle>
                {vision.subTitle}
              </Subtitle>

              {/* Render rich text HTML content */}
              <RichTextContainer
                dangerouslySetInnerHTML={{ __html: vision.content }}
              />

              <ViewMoreButton href={vision.buttonLink || "/"}>
                {vision.buttonText || "View More"}
              </ViewMoreButton>
            </ContentBox>
          </Grid>
        </Grid>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default Vision;