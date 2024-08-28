"use client";
import React from "react";
import {
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
  LabelContainer,
  LogoContainer,
  StyledInput,
  StyledSelect,
} from "./styled";
import Logo from "@/components/ui/Logo";
import { Button } from "@mui/material";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/ui/Loading";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { getRoutePrice } from "@/components/ui/maps/MapView/constants/prices";
import useDetails from "./hooks/useDetails";
const Details = () => {
  const { loading } = useLoading();
  const {
    routeInfo,
    infoLocation,
    transaction,
    handleCapture,
    handleTransactionProduct,
    handleTransactionType,
    getTransactionType,
    captureRef,
  } = useDetails();
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
            <StyledInput required={true} onChange={handleTransactionProduct} />
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
            <StyledSelect onChange={handleTransactionType}>
              <option value="transfer">Transferencia</option>
              <option value="cash">Efectivo</option>
            </StyledSelect>
          </InputGroup>
        </InputWrapper>
      </InputContainer>

      <ItemContainer>
        <ItemDetails>
          <ItemName>Origen</ItemName>
          <ItemPrice>{infoLocation[0].info}</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemName>Destino</ItemName>
          <ItemPrice>{infoLocation[1].info}</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemName>Producto</ItemName>
          <ItemPrice>{transaction?.product}</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemName>Tiempo calculado</ItemName>
          <ItemPrice>{routeInfo.time} min</ItemPrice>
        </ItemDetails>
      </ItemContainer>
      <ItemContainer>
        <ItemDetails>
          <ItemName>Medio de pago</ItemName>
          <ItemPrice>
            {getTransactionType(transaction?.type ?? "transfer")}
          </ItemPrice>
        </ItemDetails>
      </ItemContainer>

      <ItemContainer>
        <ItemDetails>
          <ItemName>Total</ItemName>
          <ItemPrice>{getRoutePrice(routeInfo.distance).toString()}</ItemPrice>
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
