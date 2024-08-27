import React from "react";
import { ButtonFooterLink, Container, FooterLink, MuiButton } from "./styled";

import theme from "@/globals/theme";

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
        <MuiButton variant="contained">Solicitar Envio</MuiButton>
      )}
    </Container>
  );
};

export default Footer;

/*

          <ButtonFooterLink
            target="_blank"
            href={`https://wa.me/+5492805062685?text=https://www.google.com/maps/dir/${originLocation[0]},${originLocation[1]}/${destinationLocation[0]},${destinationLocation[1]}`}
          >
          
          </ButtonFooterLink>

          */
