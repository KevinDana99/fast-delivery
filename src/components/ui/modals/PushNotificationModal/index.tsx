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
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const PushNotificationModal = ({
  handleAceptNotifications,
  visible: visibleModal,
}: {
  handleAceptNotifications: () => void;
  visible: boolean;
}) => {
  const [visible, setVisible] = useState(visibleModal);
  console.log(visible, "noti");
  const handleCloseModal = () => {
    setVisible(false);
  };

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
        <CloseIcon
          sx={{ alignSelf: "flex-start", cursor: "pointer" }}
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
              <NotificationsActiveIcon
                fontSize={"medium"}
              ></NotificationsActiveIcon>
              <Typography fontSize={15} sx={{ fontWeight: "medium" }}>
                Activa las notificaciones
              </Typography>
            </Box>
            <Typography variant="body2" color={"#181111"}>
              Queremos que estes al tanto de todo lo que ocurre con tu pedido
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
              size="small"
              variant="contained"
              onClick={() => {
                handleAceptNotifications();
                handleCloseModal();
              }}
            >
              Activar notificaciones
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Dialog>
  );
};

export default PushNotificationModal;
