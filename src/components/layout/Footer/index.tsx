import React from "react";
import { ButtonFooterLink, Container, FooterLink, MuiButton } from "./styled";

import theme from "@/globals/theme";
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
      {destinationLocation[0] && (
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
