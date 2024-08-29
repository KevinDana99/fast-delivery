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
  return (
    <Container>
      {destinationLocation[0] && originLocation[0] && (
        <Link href={"/details"}>
          <MuiButton color="secondary" variant="contained">
            Solicitar Envio
          </MuiButton>
        </Link>
      )}
    </Container>
  );
};

export default Footer;
