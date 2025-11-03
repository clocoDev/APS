"use client";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import LogoImage from "../../../Images/APSlogo.png";
import Navigations from "./Navigations";
import MobileSidebar from "./MobileSidebar";
import { IconMenu2 } from "@tabler/icons-react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { usePathname } from "next/navigation";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("lg")]: {
    height: "90px",
  },
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  color: theme.palette.text.secondary,
  justifyContent: "space-between",
}));

const Header = (props) => {
  const router = usePathname();

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBarStyled
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled
          ? "black"
          : router === "/"
          ? "transparent"
          : "black",
        backdropFilter: scrolled ? "none" : "none",
        marginBottom: router === "/" ? "-90px" : "0",
      }}
    >
      <Container
        sx={{
          maxWidth: "1400px !important",
          padding: "10px 20px",
        }}
      >
        <ToolbarStyled>
          <Image src={LogoImage} alt="logo" height={50} priority />
          {lgDown ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <IconMenu2 size="20" color="white" />
            </IconButton>
          ) : null}
          {lgUp ? (
            <>
              <Stack
                spacing={1}
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                <Navigations />
              </Stack>
              <div>
                <IconButton href="/auth/auth1/login" sx={{ color: "white" }}>
                  <FaRegUser size={20} />
                </IconButton>
                <IconButton href="/auth/auth1/login" sx={{ color: "white" }}>
                  <MdOutlineShoppingCart size={22} />
                </IconButton>
                <IconButton href="/auth/auth1/login" sx={{ color: "white" }}>
                  <MdSearch size={22} />
                </IconButton>
              </div>
            </>
          ) : null}
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: 270,
              border: "0 !important",
              boxShadow: (theme) => theme.shadows[8],
            },
          },
        }}
      >
        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
};

export default Header;
