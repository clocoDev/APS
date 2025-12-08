"use client";
import React, { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

// ==================== STYLED COMPONENTS ====================

const FilterContainer = styled(Box)({
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  padding: "30px 40px 30px 0",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  marginTop: "-50px",
  position: "relative",
  zIndex: 10,
  "@media (max-width: 968px)": {
    padding: "24px 20px",
    marginTop: "-30px",
  },
});

const FilterContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  "@media (max-width: 968px)": {
    flexDirection: "column",
    alignItems: "stretch",
    gap: "16px",
  },
});

const ReelImageWrapper = styled(Box)({
  flexShrink: 0,
  "@media (max-width: 968px)": {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0",
    display: "none",
  },
});

const FiltersWrapper = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  gap: "20px",
  flex: 1,
  flexWrap: "wrap",
  "@media (max-width: 968px)": {
    width: "100%",
    gap: "12px",
  },
});

const FilterGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,
  minWidth: "180px",
  "@media (max-width: 968px)": {
    width: "100%",
    minWidth: "100%",
  },
});

const FilterLabel = styled(Typography)({
  fontSize: "14px",
  fontWeight: 500,
  color: "#191919",
  lineHeight: "19px",
});

const StyledFormControl = styled(FormControl)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    fontSize: "13px",
    fontWeight: 400,
    "& fieldset": {
      borderColor: "#E0E0E0",
    },
    "&:hover fieldset": {
      borderColor: "#AE9964",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#AE9964",
      borderWidth: "2px",
    },
  },
  "& .MuiSelect-select": {
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: 400,
    color: "#181818",
  },
  "& .MuiSelect-icon": {
    color: "#2A3547",
  },
});

const StyledMenuItem = styled(MenuItem)({
  fontSize: "13px",
  color: "#181818",
  fontWeight: 400,
  padding: "10px 16px",
  "&:hover": {
    backgroundColor: "#FEF7EA",
  },
  "&.Mui-selected": {
    backgroundColor: "#FEF7EA",
    color: "#B38349",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#FEF7EA",
    },
  },
});

const ButtonGroup = styled(Box)({
  display: "flex",
  gap: "12px",
  paddingTop: "25px",
  "@media (max-width: 968px)": {
    width: "100%",
  },
});

const ApplyButton = styled(Button)({
  backgroundColor: "#B38349",
  color: "#FFFFFF",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 24px",
  borderRadius: "8px",
  whiteSpace: "nowrap",
  height: "38px",
  "&:hover": {
    backgroundColor: "#a07d5a",
  },
  "@media (max-width: 968px)": {
    flex: 1,
  },
});

const ClearButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#191919",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 24px",
  borderRadius: "8px",
  border: "1px solid #E0E0E0",
  whiteSpace: "nowrap",
  height: "38px",
  "&:hover": {
    backgroundColor: "#F5F5F5",
    borderColor: "#D0D0D0",
  },
  "@media (max-width: 968px)": {
    flex: 1,
  },
});

// ==================== COMPONENT ====================

const ClassFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    courseCategory: "",
    ageCategory: "",
    location: "",
  });

  const handleChange = (field, value) => {
    const newFilters = {
      ...filters,
      [field]: value,
    };
    setFilters(newFilters);
  };

  const handleApplyFilters = () => {
    console.log("Applying filters:", filters);
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      courseCategory: "",
      ageCategory: "",
      location: "",
    };
    setFilters(clearedFilters);
    if (onFilterChange) {
      onFilterChange(clearedFilters);
    }
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      <FilterContainer>
        <FilterContent>
          {/* Reel Image */}
          <ReelImageWrapper>
            <Image src="/reel.png" alt="Film Reel" width={60} height={60} />
          </ReelImageWrapper>

          {/* Filters */}
          <FiltersWrapper>
            {/* Course Category */}
            <FilterGroup>
              <FilterLabel>Course Category:</FilterLabel>
              <StyledFormControl>
                <Select
                  value={filters.courseCategory}
                  onChange={(e) =>
                    handleChange("courseCategory", e.target.value)
                  }
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <span style={{ color: "#999999" }}>All Courses</span>
                      );
                    }
                    return selected;
                  }}
                >
                  <StyledMenuItem value="">All Courses</StyledMenuItem>
                  <StyledMenuItem value="Acting">Acting</StyledMenuItem>
                  <StyledMenuItem value="Musical Theatre">
                    Musical Theatre
                  </StyledMenuItem>
                  <StyledMenuItem value="Industry Driven">
                    Industry Driven
                  </StyledMenuItem>
                  <StyledMenuItem value="NDIS">NDIS</StyledMenuItem>
                </Select>
              </StyledFormControl>
            </FilterGroup>

            {/* Age Category */}
            <FilterGroup>
              <FilterLabel>Age Category:</FilterLabel>
              <StyledFormControl>
                <Select
                  value={filters.ageCategory}
                  onChange={(e) => handleChange("ageCategory", e.target.value)}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return <span style={{ color: "#999999" }}>All Ages</span>;
                    }
                    return selected;
                  }}
                >
                  <StyledMenuItem value="">All Ages</StyledMenuItem>
                  <StyledMenuItem value="3-5">3-5 Years</StyledMenuItem>
                  <StyledMenuItem value="6-8">6-8 Years</StyledMenuItem>
                  <StyledMenuItem value="9-12">9-12 Years</StyledMenuItem>
                  <StyledMenuItem value="13-17">13-17 Years</StyledMenuItem>
                  <StyledMenuItem value="18+">18+ Years</StyledMenuItem>
                </Select>
              </StyledFormControl>
            </FilterGroup>

            {/* Locations */}
            <FilterGroup>
              <FilterLabel>Locations:</FilterLabel>
              <StyledFormControl>
                <Select
                  value={filters.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <span style={{ color: "#999999" }}>All Locations</span>
                      );
                    }
                    return selected;
                  }}
                >
                  <StyledMenuItem value="">All Locations</StyledMenuItem>
                  <StyledMenuItem value="Ringwood">Ringwood</StyledMenuItem>
                  <StyledMenuItem value="Moorabbin">Moorabbin</StyledMenuItem>
                  <StyledMenuItem value="Yarraville">Yarraville</StyledMenuItem>
                  <StyledMenuItem value="Narre Warren">
                    Narre Warren
                  </StyledMenuItem>
                  <StyledMenuItem value="Melbourne CBD">
                    Melbourne CBD
                  </StyledMenuItem>
                </Select>
              </StyledFormControl>
            </FilterGroup>
          </FiltersWrapper>

          {/* Buttons */}
          <ButtonGroup>
            <ApplyButton onClick={handleApplyFilters}>
              Apply Filters
            </ApplyButton>
            <ClearButton onClick={handleClearFilters}>Clear</ClearButton>
          </ButtonGroup>
        </FilterContent>
      </FilterContainer>
    </Box>
  );
};

export default ClassFilters;
