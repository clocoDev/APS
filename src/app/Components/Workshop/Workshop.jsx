"use client";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Button, Grid, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { fetchEvents } from "../../../redux/slices/eventSlice";
import { fetchAllCourses } from "../../../redux/slices/courseSlice";

const SectionWrapper = styled(Box)({
  position: "relative",
  backgroundColor: "#181818",
  padding: "0",
  overflow: "hidden",
});

const SectionTitle = styled(Typography)({
  color: "#B38349",
  fontSize: "23px",
  fontWeight: 700,
  textAlign: "center",
  fontFamily: "var(--font-inter)",
  padding: "20px",
});

const CardWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "0px",
  overflow: "hidden",
  cursor: "pointer",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.40)",
    zIndex: 1,
  },
  "&:hover .card-image": {
    transform: "scale(1.07)",
    transition: "transform 1.5s ease",
  },
  [theme.breakpoints.up("xs")]: {
    height: "300px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "450px",
  },
  [theme.breakpoints.up("md")]: {
    height: "550px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "550px",
  },
}));

const ImageWrapper = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transition: "transform 0.5s ease",
});

const CardStar = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "23%",
  left: "0px",
  zIndex: 2,
  [theme.breakpoints.up("xs")]: {
    width: "40px",
    height: "40px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "50px",
    height: "50px",
  },
}));

const CardContent = styled(Box)({
  position: "absolute",
  bottom: "25px",
  left: "50px",
  zIndex: 2,
  maxWidth: "85%",
});

const CardTitle = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "var(--font-inter)",
  fontWeight: 700,
  marginBottom: "15px",
  lineHeight: 1.3,
  letterSpacing: "-0.25px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "22px",
  },
}));

const BookButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#B38349",
  color: "white",
  padding: "6px 35px",
  borderRadius: "10px",
  fontFamily: "var(--font-inter)",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#B88A3F",
  },
  [theme.breakpoints.up("xs")]: {
    padding: "3px 25px",
    fontSize: "13px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "6px 35px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "6px 35px",
  },
}));

const Workshop = () => {
  const dispatch = useDispatch();

  // Get data from Redux store
  const { events, loading: eventsLoading } = useSelector((state) => state.event);
  const { courses, loading: coursesLoading } = useSelector((state) => state.course);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchAllCourses());
  }, [dispatch]);

  // Memoized cards data with business logic
  const cardsData = useMemo(() => {
    // Filter events with displayOnHomePage = true and isActive = true
    const homePageEvents = events
      .filter((event) => event.displayOnHomePage && event.isActive)
      .slice(0, 4) // Maximum 4 events
      .map((event) => ({
        type: "event",
        id: event.id,
        title: event.title,
        image: event.mediaUrl,
        link: `/events/${event.id}`,
        hasImage: true,
      }));

    const cards = [...homePageEvents];

    // If less than 4 events, fill with categories
    if (cards.length < 4) {
      const remainingSlots = 4 - cards.length;
      const activeCourse = courses
        .filter((cat) => cat.inHomePage && cat.isActive && cat.title !== "Special Workshop" )
        .slice(0, remainingSlots)
        .map((course) => ({
          type: "course",
          id: course.id,
          title: course.title,
          image: course.mediaUrl,
          link: `/courses/${course.id}`,
          hasImage: true,
        }));

      cards.push(...activeCourse);
    }

    return cards;
  }, [events, courses]);

  const isLoading = eventsLoading || coursesLoading;

  return (
    <SectionWrapper>
      <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
        <SectionTitle variant="h2">Secure Your Spot Now!</SectionTitle>

        <Grid container spacing={0} padding={0} maxWidth={"100%"}>
          {isLoading ? (
            // Loading Skeletons
            [...Array(4)].map((_, index) => (
              <Grid
                size={{
                  xs: 6,
                  sm: 6,
                  md: 6,
                  lg: 3,
                }}
                key={`skeleton-${index}`}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: "100%",
                    height: { xs: "300px", sm: "450px", md: "550px" },
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
              </Grid>
            ))
          ) : cardsData.length > 0 ? (
            // Render Cards
            cardsData.map((card, index) => (
              <Grid
                size={{
                  xs: 6,
                  sm: 6,
                  md: 6,
                  lg: 3,
                }}
                key={`${card.type}-${card.id}`}
              >
                <CardWrapper>
                  {/* Background Image - Only for events */}
                  {card.hasImage && card.image && (
                    <ImageWrapper className="card-image">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority={index === 0}
                      />
                    </ImageWrapper>
                  )}

                  {/* Decorative Star */}
                  <CardStar>
                    <Image
                      src="/secureStar.png"
                      alt=""
                      width={50}
                      height={50}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </CardStar>

                  {/* Card Content */}
                  <CardContent>
                    <CardTitle>{card.title}</CardTitle>
                    <BookButton href={card.link}>Book Now</BookButton>
                  </CardContent>
                </CardWrapper>
              </Grid>
            ))
          ) : (
            // No Data Fallback
            <Grid size={12}>
              <Typography
                sx={{
                  color: "white",
                  textAlign: "center",
                  padding: "40px",
                  fontFamily: "var(--font-inter)",
                }}
              >
                No events or categories available at the moment.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default Workshop;