import React, { useState } from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const SideBar = () => {
  const selectedCategory = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.name}
          className="category-btn"
          style={{
            color: "#fff",
            background: selectedCategory === cat.name && "#FC1503",
          }}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{ opacity: cat.name === selectedCategory ? "1" : "0.7" }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
