"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Logo from "../../../Images/logoblack.png";
import { NavLinks } from "./Navigations";
import { Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";

const MobileSidebar = () => {
  return (
    <>
      <Box
        sx={{
          px: 3,
          paddingTop: "15px",
        }}
      >
        <Image src={Logo} alt="logo" height={55} priority />
      </Box>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Stack direction="column" spacing={2}>
          {NavLinks.map((navlink, i) => (
            <Button
              color="inherit"
              href={navlink.to}
              key={i}
              sx={{
                justifyContent: "start",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              {navlink.title}{" "}
            </Button>
          ))}
        </Stack>
        <Stack direction="row" paddingTop={5}>
          <IconButton href="/auth/auth1/login" sx={{ color: "black" }}>
            <FaRegUser size={20} />
          </IconButton>
          <IconButton href="/auth/auth1/login" sx={{ color: "black" }}>
            <MdOutlineShoppingCart size={22} />
          </IconButton>
          <IconButton href="/auth/auth1/login" sx={{ color: "black" }}>
            <MdSearch size={22} />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default MobileSidebar;
