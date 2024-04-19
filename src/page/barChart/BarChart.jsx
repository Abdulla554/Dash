import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";
import Header from "../../components/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      {/* خليته ب كنبونت لوحد لان اريد استخدمه بغير مكان  */}
      <Bar />
    </Box>
  );
};

export default BarChart;
