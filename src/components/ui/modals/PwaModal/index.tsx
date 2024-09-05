import {
  Box,
  Button,
  Container,
  Dialog,
  Fade,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CloseIcon from "@mui/icons-material/Close";
import { IconClose } from "./styled";
const PwaModal = ({
  handleInstall,
  visible: visibleProp,
}: {
  visible: boolean;
  handleInstall: () => void;
}) => {
  const [visible, setVisible] = useState(true);

  const handleCloseModal = () => {
    setVisible(false);
  };
  useEffect(() => {
    setVisible(visibleProp);
  }, [visibleProp]);
  const tourCompleted = localStorage.getItem("tour-home");
  return (
    <Dialog open={visible} onClose={handleCloseModal}>
      <Paper
        role="dialog"
        aria-modal="false"
        aria-label="Cookie banner"
        square
        variant="outlined"
        tabIndex={-1}
        sx={{
          display: "flex",
          position: "fixed",
          flexDirection: "row-reverse",
          bottom: 0,
          m: 2,
          p: 2,
          borderWidth: 0,
          borderTopWidth: 1,
          borderRadius: 2,
          left: 0,
          right: 0,
          justifyContent: "space-between ",
        }}
      >
        <IconClose
          sx={{ alignSelf: "flex-start" }}
          onClick={handleCloseModal}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "space-between", gap: 2, width: "95%" }}
        >
          <Box
            sx={{
              flexShrink: 1,
              alignSelf: { xs: "flex-start" },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <SmartphoneIcon fontSize={"medium"}></SmartphoneIcon>
              <Typography fontSize={15} sx={{ fontWeight: "bold" }}>
                Esta app es compatible
              </Typography>
            </Box>
            <Typography variant="body2" color={"#181111"}>
              ¿Deseas instalar Fast Delivery en tu dispositivo?
            </Typography>
          </Box>

          <Stack
            sx={{ justifyContent: "flex-end" }}
            direction={{
              xs: "row",
              sm: "row",
            }}
          >
            <Button size="small" variant="contained" onClick={handleInstall}>
              Instalar app
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Dialog>
  );
};

export default PwaModal;
