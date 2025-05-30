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
import React, { useContext, useEffect, useRef, useState } from "react";

import { IconClose } from "./styled";
import { ModalContext } from "@/contexts/modalContext";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
const TutorialModal = ({ visible: visibleProp }: { visible: boolean }) => {
  const [visible, setVisible] = useState(true);

  const handleCloseModal = () => {
    setVisible(false);
  };

  const { handleShowTutorial } = useContext(ModalContext);

  const handleFinishTutorial = () => {
    localStorage.setItem("tour-home", "true");
  };
  useEffect(() => {
    setVisible(visibleProp);
  }, [visibleProp]);

  return (
    <Dialog
      open={visible}
      onClick={() => {
        handleCloseModal();
        handleFinishTutorial();
      }}
    >
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
          onClick={() => {
            handleCloseModal();
            handleFinishTutorial();
          }}
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
              <LightbulbIcon fontSize={"medium"}></LightbulbIcon>
              <Typography fontSize={15} sx={{ fontWeight: "bold" }}>
                Tutorial
              </Typography>
            </Box>
            <Typography variant="body2" color={"#181111"}>
              ¿Deseas ver el tutorial de inicio?
            </Typography>
          </Box>

          <Stack
            sx={{ justifyContent: "flex-end" }}
            direction={{
              xs: "row",
              sm: "row",
            }}
          >
            <Button
              style={{ marginRight: 5 }}
              size="small"
              variant="outlined"
              onClick={() => {
                handleFinishTutorial();
                handleCloseModal();
              }}
            >
              Mas tarde
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                handleShowTutorial(true);
                handleCloseModal();
              }}
            >
              Ver tutorial
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Dialog>
  );
};

export default TutorialModal;
