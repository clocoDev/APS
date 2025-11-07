"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import LogoImage from "../../../Images/logoblack.png";
import FooterBg from "../../../Images/footerBg.png";

const FooterWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: "60px",
  paddingBottom: "20px",
  backgroundImage: `url(${FooterBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
}));

const Line = styled(Divider)(({ theme }) => ({
  width: "100px",
  color: "#B9B9B9",
  marginBottom: "15px",
  borderBottomWidth: 2,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#181818",
  textDecoration: "none",
  fontSize: "14px",
  display: "block",
  marginBottom: "15px",
  fontWeight: "400",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#B38349",
    textDecoration: "none",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#B38349",
  fontWeight: 600,
  fontSize: "16px",
  marginBottom: "20px",
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg" sx={{ maxWidth: "95% !important" }}>
        <Grid container spacing={4}>
          {/* Left Section - Logo and Description */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
              lg: 4,
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Image
                src={LogoImage}
                alt="Acting Performance Studio"
                height={50}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                color: "#181818",
                lineHeight: 1.7,
                letterSpacing: "0.8px",
                maxWidth: "350px",
              }}
            >
              Unleash your creativity, build confidence, and discover the joy of
              performing arts with our professional acting classes for all ages.
            </Typography>
          </Grid>

          {/* Our Classes */}
          <Grid
            size={{
              xs: 6,
              sm: 6,
              lg: 2.5,
            }}
          >
            <SectionTitle>Our Classes</SectionTitle>
            <FooterLink href="">Kids Classes (7-12)</FooterLink>
            <Line />
            <FooterLink href="">Teen Classes (13-17)</FooterLink>
            <Line />
            <FooterLink href="">Adult Classes (18+)</FooterLink>
            <Line />
            <FooterLink href="">All Classes</FooterLink>
          </Grid>

          {/* Quick Links */}
          <Grid
            size={{
              xs: 6,
              sm: 6,
              lg: 2.5,
            }}
          >
            <SectionTitle>Quick Links</SectionTitle>
            <FooterLink href="/">Home</FooterLink>
            <Line />
            <FooterLink href="/signin">Sign In / Register</FooterLink>
            <Line />
            <FooterLink href="/about">About Us</FooterLink>
            <Line />
            <FooterLink href="/studios">Our Studios</FooterLink>
            <Line />
            <FooterLink href="/ndis">NDIS Information</FooterLink>
          </Grid>

          {/* Contact Us */}
          <Grid
            size={{
              xs: 12,
              sm: 6,
              lg: 3,
            }}
          >
            <SectionTitle>Contact Us</SectionTitle>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <IoLocationOutline
                  color="#B38349"
                  size={20}
                  style={{ marginTop: "2px" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#181818", fontSize: "14px", lineHeight: 1.6 }}
                >
                  123 Performance Way Sydney,
                  <br />
                  NSW 2000
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MdOutlineLocalPhone color="#B38349" size={20} />
                <FooterLink href="tel:0212345678" sx={{ mb: 0 }}>
                  (02) 12345678
                </FooterLink>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MdOutlineEmail color="#B38349" size={20} />
                <FooterLink
                  href="mailto:info@actingperformancestudio.com"
                  sx={{ mb: 0, wordBreak: "break-word" }}
                >
                  info@actingperformancestudio.com
                </FooterLink>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Section - Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#181818", fontSize: "13px" }}
          >
            Copyright 2025 Cloco.com.au © All rights reserved
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <FooterLink
              href="/privacy"
              sx={{
                mb: 0,
                color: "#B38349",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              Privacy Policy
            </FooterLink>
            <FooterLink
              href="/terms"
              sx={{
                mb: 0,
                color: "#B38349",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              Terms of Service
            </FooterLink>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
