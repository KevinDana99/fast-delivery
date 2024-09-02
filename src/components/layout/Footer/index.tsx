import React from "react";
import { Container, MuiButton } from "./styled";

import Link from "next/link";

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
      <Link href={"/details"}>
        <MuiButton
          sx={{ background: !enableButton ? "#c6c6c6 !important" : null }}
          color="secondary"
          variant="contained"
          disabled={!enableButton}
        >
          Solicitar Envio
        </MuiButton>
      </Link>
    </Container>
  );
};

export default Footer;
