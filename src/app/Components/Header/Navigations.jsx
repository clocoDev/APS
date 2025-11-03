"use client";
import React from "react";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavLinks = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "CLASSES",
    href: "",
  },
  {
    title: "TIMETABLE",
    href: "",
  },
  {
    title: "ABOUT US",
    href: "",
  },
  {
    title: "CONTACT US",
    href: "",
  },
];

const Navigations = () => {
  const router = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: "13px",
    color: "white",
    fontWeight: 500,
    borderRadius: 0,
    margin: "0px 20px !important",
    paddingRight: 0,
    paddingLeft: 0,
    "&.active": {
      minWidth: 0,
      //   paddingRight: 0,
      //   paddingLeft: 0,
      borderBottom: "3px solid #EE5B54",
      color: "#EE5B54",
    },
  }));

  return (
    <>
      {NavLinks.map((navlink, i) => (
        <StyledButton
          color="white"
          component={Link}
          href={navlink.href}
          className={router === navlink.href ? "active" : "not-active"}
          variant="text"
          key={i}
          sx={{ marginLeft: "15px" }}
        >
          {navlink.title}{" "}
        </StyledButton>
      ))}
    </>
  );
};

export default Navigations;
