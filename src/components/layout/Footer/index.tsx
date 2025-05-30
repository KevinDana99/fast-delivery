import React, { useContext } from "react";
import { ButtonLink, Container, MuiButton } from "./styled";

import theme from "@/globals/theme";
import { StatusShipmentType } from "@/components/ui/bars/StatusBar/types";
import { Button } from "@mui/material";
import { RouteContext } from "@/contexts/routeContext";
import { AuthContext } from "@/contexts/authConext";

const Footer = ({
  originLocation,
  destinationLocation,
}: {
  originLocation: number[];
  destinationLocation: number[];
}) => {
  const enableButton = destinationLocation[0] && originLocation[0];

  return (
    <Container>
      <MuiButton
        sx={{
          width: 150,
          height: 40,
          background: !enableButton ? "#c6c6c6 !important" : null,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: theme.colors.background,
          },
        }}
        color="secondary"
        variant="contained"
        disabled={!enableButton}
      >
        <ButtonLink href={"/details"} id="mobile-step4-home">
          Solicitar Envio
        </ButtonLink>
      </MuiButton>
    </Container>
  );
};

export default Footer;
