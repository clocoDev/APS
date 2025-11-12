"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Skeleton,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HeroBanner.css";
import { fetchAllBanners } from "@/redux/slices/bannerSlice";

const BannerSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 6 }}>
        <Box>
          <Skeleton variant="rectangular" width="100%" height={700} />
        </Box>
      </Grid>
    </Grid>
  );
};

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "50vh",
  minHeight: "400px",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    height: "60vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "80vh",
  },
  [theme.breakpoints.up("lg")]: {
    height: "700px",
  },
}));

const SlideContent = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
    zIndex: 1,
  },
});

const BackgroundMedia = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  "& img, & video": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ContentWrapper = styled(Container)({
  position: "relative",
  zIndex: 2,
  color: "white",
  maxWidth: "1400px !important",
  padding: "10px 20px",
});

const FirstButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#B38349",
  color: "white",
  padding: "5px 20px",
  borderRadius: "25px",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "none",
  [theme.breakpoints.up("sm")]: {
    padding: "10px 32px",
    fontSize: "15px",
  },
  "&:hover": {
    backgroundColor: "#B88A3F",
  },
}));

const SecondButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#121212",
  color: "white",
  padding: "4px 20px",
  borderRadius: "25px",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "none",
  border: "2px solid white",
  [theme.breakpoints.up("sm")]: {
    padding: "10px 32px",
    fontSize: "15px",
  },
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "2px solid white",
  },
}));

const HeroBanner = () => {
  const { banners, loading, error } = useSelector((state) => state.banner);
  const [bannerSlide, setBannerSlide] = useState(banners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBanners());
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (banners?.length > 0) {
          const stored = JSON.parse(localStorage.getItem("allBanners") || "[]");
          queueMicrotask(() => setBannerSlide(stored));
        } else {
          localStorage.setItem("allBanners", JSON.stringify(banners) || "[]");
        }
      } catch {
        queueMicrotask(() => setBannerSlide([]));
      }
    }
  }, [banners]);

  if (loading) return <BannerSkeleton />;
  if (error) return <p>Error: {error}</p>;

  return (
    <HeroWrapper>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        {bannerSlide?.map((slide, index) => (
          <SwiperSlide key={index}>
            <BackgroundMedia>
              {slide?.mediaType?.startsWith("image") ? (
                <Image
                  src={slide?.mediaUrl}
                  alt={slide?.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              ) : (
                <video autoPlay loop muted playsInline>
                  <source src={slide?.mediaUrl} type="video/mp4" />
                </video>
              )}
            </BackgroundMedia>
            <SlideContent>
              <ContentWrapper maxWidth="lg">
                {slide?.title && (
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "var(--font-inter)",
                      fontSize: {
                        xs: "25px",
                        sm: "30px",
                        md: "45px",
                        lg: "50px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: "1px",
                      mb: { xs: 1, sm: 2, md: 3 },
                      maxWidth: "600px",
                    }}
                  >
                    {slide?.title}
                  </Typography>
                )}
                {slide?.subtitle && (
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "var(--font-inter)",
                      fontSize: { xs: "14px", md: "18px" },
                      color: "#ECE1DB",
                      mb: { xs: 2, sm: 3, md: 4 },
                      maxWidth: "500px",
                      fontWeight: 300,
                    }}
                  >
                    {slide?.subtitle}
                  </Typography>
                )}
                {(slide?.button1Text || slide?.button2Text) && (
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ flexWrap: "wrap", gap: 2 }}
                  >
                    {slide?.button1Text && (
                      <FirstButton href={slide?.button1Link}>
                        {slide.button1Text}
                      </FirstButton>
                    )}
                    {slide?.button2Text && (
                      <SecondButton href={slide?.button2Link}>
                        {slide?.button2Text}
                      </SecondButton>
                    )}
                  </Stack>
                )}
              </ContentWrapper>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroWrapper>
  );
};

export default HeroBanner;
