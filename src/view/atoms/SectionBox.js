import { Box, Typography } from "@mui/material";
import Header from "./Header";
import { SmallWindow } from "../../nonview/base";

export default function SectionBox({
  children,
  title,
  description,
  source,
  noMaxWidth = false,
}) {
  description = description || "Description TODO";
  source = source || "elections.gov.lk";
  const width = SmallWindow.WIDGET_WIDTH;

  return (
    <Box
      sx={{
        minWidth: width,
      }}
    >
      <Header level={2} id="lk-elections-widget-text-title">
        {title}
      </Header>
      <Box
        sx={{
          paddingBottom: 3,
          paddingTop: 3,
        }}
        id="lk-elections-widget-text-body"
      >
        {description}
      </Box>
      <Box>{children}</Box>
      <Box>
        <Typography variant="caption" sx={{ color: "#888" }}>
          data source: {source}
        </Typography>
      </Box>
    </Box>
  );
}
