import React, { useContext } from "react";
import { ButtonLink, Container, MuiButton } from "./styled";

import Link from "next/link";
import theme from "@/globals/theme";
import { RouteContext } from "@/contexts/routeContext";

const Footer = ({
  originLocation,
  destinationLocation,
}: {
  originLocation: number[];
  destinationLocation: number[];
}) => {
  const enableButton = destinationLocation[0] && originLocation[0];
  const { myLocation } = useContext(RouteContext);
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

      {myLocation ? `lat: ${myLocation[0]} lng: ${myLocation[1]} ` : null}
    </Container>
  );
};

export default Footer;
