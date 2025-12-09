"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconStar } from "@tabler/icons-react";
import AvailableSessions from "./components/AvailableSessions";
import TutorsSection from "./components/TutorsSection";

// ==================== HELPER FUNCTION ====================

const getMediaType = (url) => {
  if (!url) return "image";
  const extension = url.split(".").pop().toLowerCase();
  const videoExtensions = ["mp4", "webm", "ogg", "mov"];
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

  if (videoExtensions.includes(extension)) return "video";
  if (imageExtensions.includes(extension)) return "image";
  return "image";
};

// ==================== STYLED COMPONENTS ====================

const MediaSection = styled(Box)({
  position: "relative",
  width: "100%",
  padding: "0 40px",
  paddingTop: "20px",
  "@media (max-width: 768px)": {
    padding: "0 30px",
    paddingTop: "20px",
  },
});

const ClassTitle = styled(Typography)({
  fontSize: "28px",
  fontWeight: 700,
  color: "#000000",
  padding: "15px 0 15px",
  "@media (max-width: 768px)": {
    fontSize: "20px",
  },
});

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "600px",
  overflow: "hidden",
  "@media (max-width: 768px)": {
    height: "400px",
  },
});

const StyledCardMedia = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

const StyledVideo = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

const ContentSection = styled(Box)({
  padding: "40px 70px",
  "@media (max-width: 998px)": {
    padding: "40px 30px",
  },
  "@media (max-width: 568px)": {
    padding: "20px",
  },
});

const ContentFlex = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "40px",
  },
});

const MainContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  flex: 1,
});

const DescriptionSection = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const DescriptionBg = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const DescriptionBgImg = styled("img")({
  height: "250px",
  objectFit: "contain",
});

const SectionTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: 600,
  color: "#191919",
  marginBottom: "8px",
});

const DescriptionText = styled(Typography)({
  fontSize: "15px",
  color: "#333333",
  lineHeight: "26px",
  marginBottom: "16px",
});

const WhatYouLearnBox = styled(Box)({
  backgroundColor: "#FFFFFF",
  border: "1px solid #E5E5E5",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
  height: "fit-content",
});

const WhatYouLearnTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: 700,
  color: "#B38349",
  marginBottom: "24px",
  textAlign: "center",
  "@media (max-width: 768px)": {
    textAlign: "left",
  },
});

const LearnItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px",
  "&:last-child": {
    marginBottom: 0,
  },
});

const LearnText = styled(Typography)({
  fontSize: "15px",
  color: "#000000",
  fontWeight: 400,
});

const BannerContainer = styled(Box)({
  border: "1px solid #E5E5E5",
  borderRadius: "8px",
  padding: "10px 24px",
  backgroundColor: "#FFFFFF",
  textAlign: "center",
  margin: "30px 80px 20px",
  boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.10)",
  "@media (max-width: 998px)": {
    margin: "25px 20px 20px",
  },
});

const BannerText = styled(Typography)({
  fontSize: "14px",
  color: "#191919",
  fontWeight: 400,
});

const SignUpLink = styled("span")({
  fontSize: "14px",
  color: "#191919",
  fontWeight: 700,
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

// ==================== SAMPLE DATA ====================

const classData = {
  id: 1,
  title: "Senior Kids Acting - Teens",
  mediaUrl: "/detailsBg.png",
  sections: [
    {
      title: "Bold Choices. Real Characters. Big Fun",
      content: [
        "This dynamic weekly class is all about building strong acting foundations through imagination, physicality, and play. Students learn how to make bold choices, embody characters, and stay present in the moment through a mix of improvisation games, active exercises, and scene work designed specifically for young performers.",
        "After some fun acting and improvisation games, get to work! Students explore tools used by professional actors, such as script analysis, physical transformation, and craft of truth - help them connect with the material in a big, authentic way. Using industry-standard techniques, they learn to build a character from the script and understand their character's choices, and creative goals to seek.",
        "The focus is always on learning through play — building confidence, creative instincts, and performance technique in a supportive and energetic environment.",
        "Whether your child is brand new to acting or continuing to grow as performers, this class offers the tools and encouragement they need to keep developing their craft — and have a lot of fun doing the way.",
      ],
    },
  ],
  whatYouLearn: [
    "Bold character choices",
    "Improvisation skills",
    "Scene work and analysis",
    "On-camera technique",
    "Confidence building",
    "Character development",
    "Physical transformation",
    "Performance reflection",
  ],
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
      ageRange: "7-9",
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
      ageRange: "10-12",
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
      id: 4,
      ageRange: "13-17",
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
  tutors: [
    {
      id: 1,
      name: "Harrison Lane",
      image: "/tutor.jpg",
      bio: "Harrison Lane is a Melbourne based Director and Actor and has been teaching acting for several years. During his time studying at VCA for his Bachelors in Directing for Film and TV he wrote and...",
    },
    {
      id: 2,
      name: "Harrison Lane",
      image: "/tutor.jpg",
      bio: "Harrison Lane is a Melbourne based Director and Actor and has been teaching acting for several years. During his time studying at VCA for his Bachelors in Directing for Film and TV he wrote and...",
    },
  ],
};

// ==================== COMPONENT ====================

const ClassDetailsPage = () => {
  const mediaType = getMediaType(classData.mediaUrl);
  const isVideo = mediaType === "video";

  return (
    <Box>
      <MediaSection>
        {/* Title */}
        <ClassTitle>{classData.title}</ClassTitle>

        {/* Media Content - Auto-detect Image/GIF/Video */}
        <ImageContainer>
          {isVideo ? (
            <StyledVideo
              src={classData.mediaUrl}
              controls
              preload="metadata"
              onError={(e) => {
                console.error("Video failed to load:", e);
              }}
            >
              Your browser does not support the video tag.
            </StyledVideo>
          ) : (
            <StyledCardMedia
              src={classData.mediaUrl} // Correct prop for img element
              alt={classData.title}
            />
          )}
        </ImageContainer>
      </MediaSection>

      {/* Content Section */}
      <ContentSection>
        <Container maxWidth="xl">
          <ContentFlex>
            {/* Main Content */}
            <MainContent>
              {/* Description Section */}
              <DescriptionSection>
                <DescriptionBg>
                  <DescriptionBgImg src="/bg3.png" />
                </DescriptionBg>

                {classData.sections.map((section, index) => (
                  <Box key={index}>
                    <SectionTitle>{section.title}</SectionTitle>
                    {section.content.map((paragraph, pIndex) => (
                      <DescriptionText key={pIndex}>
                        {paragraph}
                      </DescriptionText>
                    ))}
                  </Box>
                ))}
              </DescriptionSection>
            </MainContent>

            {/* Sidebar */}
            <WhatYouLearnBox>
              <WhatYouLearnTitle>{"What You'll Learn"}</WhatYouLearnTitle>
              {classData.whatYouLearn.map((item, index) => (
                <LearnItem key={index}>
                  <IconStar
                    size={14}
                    color="#EE5B54"
                    fill="#EE5B54"
                    strokeWidth={3}
                  />
                  <LearnText>{item}</LearnText>
                </LearnItem>
              ))}
            </WhatYouLearnBox>
          </ContentFlex>
        </Container>
      </ContentSection>

      <AvailableSessions sessions={classData.sessions} />

      <BannerContainer>
        <BannerText>
          Interested in courses like these?
          <SignUpLink> Sign up</SignUpLink> to be notified of vacancies and
          similar courses
        </BannerText>
      </BannerContainer>

      <TutorsSection tutors={classData.tutors} />
    </Box>
  );
};

export default ClassDetailsPage;
