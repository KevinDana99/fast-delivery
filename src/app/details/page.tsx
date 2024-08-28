"use client";
import React, { useRef, useState } from "react";
import {
  CloseIcon,
  Container,
  Header,
  IconWrapper,
  InputContainer,
  InputGroup,
  InputWrapper,
  ItemContainer,
  ItemDetails,
  ItemName,
  ItemPrice,
  ItemQuantity,
  LabelContainer,
  LogoContainer,
  PayButton,
  StyledInput,
  StyledSelect,
  Title,
} from "./styled";
import Logo from "@/components/ui/Logo";
import { Button } from "@mui/material";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/ui/Loading";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import html2canvas from "html2canvas";
const Details = () => {
  const { loading } = useLoading();
  const captureRef = useRef(null);

  const sendLinkToWhatsApp = (imageUrl) => {
    const phoneNumber = "542805062685";
    const text = `Comprobante de envio: ${imageUrl}`;
    const encodedText = encodeURIComponent(text);
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodedText}`;

    window.location.href = url;
  };

  const uploadImageToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", "c73710a57090e61d34266a8d4a09c14b");

    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data, "data");
    return data.data.url_viewer;
  };

  const handleCapture = async () => {
    const dataURLToBase64 = (dataURL: string) => {
      return dataURL.split(",")[1];
    };
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current, {
        ignoreElements: (element) => {
          return element.classList.contains("hidden-capture");
        },
      });
      const dataUrl = canvas.toDataURL("image/png");
      const base64 = dataURLToBase64(dataUrl);
      const imageUrl = await uploadImageToImgBB(base64);

      sendLinkToWhatsApp(imageUrl);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Container ref={captureRef}>
      <Header></Header>
      <LogoContainer>
        <Logo size={200} />
      </LogoContainer>
      <LabelContainer className="hidden-capture">
        <ItemDetails>
          <ItemName>¿Que vas a enviar?</ItemName>
        </ItemDetails>
      </LabelContainer>
      <InputContainer className="hidden-capture">
        <InputWrapper>
          <InputGroup>
            <StyledInput required={true} />
            <IconWrapper
              data-icon="User"
              data-size="24px"
              data-weight="regular"
            >
              <ShoppingBagIcon />
            </IconWrapper>
          </InputGroup>
        </InputWrapper>
      </InputContainer>
      <LabelContainer className="hidden-capture">
        <ItemDetails>
          <ItemName>Medio de pago</ItemName>
        </ItemDetails>
      </LabelContainer>
      <InputContainer className="hidden-capture">
        <InputWrapper>
          <InputGroup>
            <StyledSelect>
              <option value="transfer">Transferencia</option>
              <option value="cash">Efectivo</option>
            </StyledSelect>
          </InputGroup>
        </InputWrapper>
      </InputContainer>

      <ItemContainer>
        <ItemDetails>
          <ItemName>Origen</ItemName>
          <ItemPrice>Av. Roca</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemName>Destino</ItemName>
          <ItemPrice>Av. Hansen</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemName>Tiempo calculado</ItemName>
          <ItemPrice>20 min</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemName>Medio de pago</ItemName>
          <ItemPrice>Transferencia</ItemPrice>
        </ItemDetails>
      </ItemContainer>

      <ItemContainer>
        <ItemDetails>
          <ItemName>Total</ItemName>
          <ItemPrice>$2500</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <div style={{ padding: "0.75rem" }}>
        <Button
          onClick={handleCapture}
          sx={{ width: "100%", height: 40 }}
          color="primary"
          variant="contained"
          className="hidden-capture"
        >
          Confirmar
        </Button>
      </div>
      <div style={{ height: "1.25rem", backgroundColor: "#f8f9fa" }}></div>
    </Container>
  );
};

export default Details;
