"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineChat } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";

const MainWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  background: "#B38349",
});

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#FFFFFF",
  maxWidth: "1100px",
  padding: "60px 40px 60px 0px",
  overflow: "hidden",
  zIndex: 1,
  boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.10)",
  margin: "-50px 20px 10px 20px",
  [theme.breakpoints.between(0, 900)]: {
    padding: "50px 20px",
  },
}));

const DecorativeStar = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "-24px",
  transform: "translateY(-50%)",
  width: "100px",
  height: "100px",
  opacity: 1,
  zIndex: 0,
  [theme.breakpoints.between(0, 900)]: {
    top: "80px",
  },
}));

const ContentWrapper = styled(Container)({
  position: "relative",
  zIndex: 1,
});

const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  paddingLeft: "50px",
  paddingRight: "10px",
  [theme.breakpoints.between(900, 1000)]: {
    paddingLeft: "40px",
    paddingRight: "0px",
  },
  [theme.breakpoints.between(0, 900)]: {
    paddingLeft: "30px",
    paddingRight: "0px",
  },
}));

const MainTitle = styled(Typography)({
  color: "#000000",
  fontFamily: "var(--font-inter)",
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: "8px",
});

const Subtitle = styled(Typography)({
  color: "#000000",
  fontFamily: "var(--font-inter)",
  fontSize: "14px",
});

const FormBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#FFFFFF",
    borderRadius: "50px",
    "& fieldset": {
      borderColor: "#A5A5A5",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#EE5B54",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EE5B54",
      borderWidth: "2px",
    },
    "& input": {
      backgroundColor: "#FFFFFF !important",
      WebkitBoxShadow: "0 0 0 1000px white inset !important",
    },
  },
  "& .MuiInputBase-root": {
    backgroundColor: "#FFFFFF !important",
  },
  "& .MuiInputBase-input": {
    padding: "12px 10px 12px 0px",
    fontFamily: "var(--font-inter)",
    fontSize: "12px",
    backgroundColor: "#FFFFFF !important",
  },
  "& .MuiInputAdornment-root": {
    color: "#EE5B54",
    marginRight: "8px",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px white inset !important",
    WebkitTextFillColor: "#000000 !important",
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: "#B38349",
  color: "white",
  padding: "8px 8px",
  borderRadius: "50px",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 700,
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "#B88A3F",
  },
});

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <MainWrapper>
      <SectionWrapper>
        <DecorativeStar>
          <Image
            src="/secureStar.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </DecorativeStar>

        <ContentWrapper maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <TitleBox>
                <MainTitle variant="h2">Find Your Course</MainTitle>
                <Subtitle>
                  Find out our next available admission programs and new members
                </Subtitle>
              </TitleBox>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <FormBox component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <StyledTextField
                      fullWidth
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ paddingLeft: "5px" }}
                            >
                              <FaRegUser size={15} color="#EE5B54" />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4 }}>
                    <StyledTextField
                      fullWidth
                      placeholder="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <MdOutlineEmail size={18} color="#EE5B54" />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4 }}>
                    <StyledTextField
                      fullWidth
                      placeholder="Theatre"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <LuGraduationCap size={18} color="#EE5B54" />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 9 }}>
                    <StyledTextField
                      fullWidth
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <MdOutlineChat size={17} color="#EE5B54" />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 3 }}>
                    <SubmitButton type="submit" fullWidth>
                      Start Now
                    </SubmitButton>
                  </Grid>
                </Grid>
              </FormBox>
            </Grid>
          </Grid>
        </ContentWrapper>
      </SectionWrapper>
    </MainWrapper>
  );
};

export default Enquiry;
