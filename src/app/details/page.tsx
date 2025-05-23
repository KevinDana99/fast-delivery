"use client";
import React, { useRef } from "react";
import {
  BoxContainer,
  ButtonLink,
  Container,
  ContainerButton,
  Header,
  IconWrapper,
  InputContainer,
  InputExtra,
  InputGroup,
  InputWrapper,
  ItemContainer,
  ItemDetails,
  ItemName,
  ItemPrice,
  LabelContainer,
  LogoContainer,
  StyledButton,
  StyledInput,
  StyledInputExtra,
  StyledSelect,
} from "./styled";
import Logo from "@/components/ui/Logo";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { getRoutePrice } from "@/components/ui/maps/MapView/constants/prices";
import useDetails from "./hooks/useDetails";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Details = () => {
  const {
    routeInfo,
    infoLocation,
    transaction,
    loading: loadingButton,
    handleTransactionProduct,
    handleTransactionType,
    getTransactionType,
    handleCopyToClipboard,
    handleOnChangeExtraPrice,
    handleCreateTransaction,
    captureRef,
  } = useDetails();

  return (
    <Container>
      <Header>
        <ButtonLink href={"/"}>
          <ArrowBackIcon color="primary" className="hidden-capture" />
        </ButtonLink>
      </Header>
      <BoxContainer ref={captureRef}>
        <LogoContainer>
          <Logo size={200} />
        </LogoContainer>
        <LabelContainer className="hidden-capture">
          <ItemDetails>
            <ItemName>¿Que vas a enviar?</ItemName>
          </ItemDetails>
        </LabelContainer>
        <InputContainer className="hidden-capture">
          <InputWrapper id="step1-details">
            <InputGroup>
              <StyledInput
                required={true}
                onChange={handleTransactionProduct}
                placeholder="Detalle del paquete"
              />
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
          <StyledSelect onChange={handleTransactionType} id="step2-details">
            <option value="transfer">Transferencia</option>
            <option value="cash">Efectivo</option>
          </StyledSelect>
        </InputContainer>

        {transaction?.type !== "cash" && (
          <>
            <LabelContainer className="hidden-capture">
              <ItemDetails>
                <ItemName>Alias</ItemName>
              </ItemDetails>
            </LabelContainer>
            <InputContainer className="hidden-capture">
              <InputWrapper>
                <InputGroup>
                  <StyledInput
                    type="text"
                    value={"kevindana.bru"}
                    onClick={handleCopyToClipboard}
                  />
                  <IconWrapper
                    data-icon="User"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <ContentCopyIcon />
                  </IconWrapper>
                </InputGroup>
              </InputWrapper>
            </InputContainer>
          </>
        )}

        <LabelContainer className="hidden-capture">
          <ItemDetails>
            <ItemName>Monto para retiro</ItemName>
          </ItemDetails>
        </LabelContainer>
        <InputContainer className="hidden-capture">
          <InputWrapper id="step3-details">
            <InputExtra>
              {transaction?.depositPrice && "$"}
              <StyledInputExtra
                placeholder="Opcional"
                type="number"
                onChange={handleOnChangeExtraPrice}
                value={transaction?.depositPrice ?? ""}
              />
            </InputExtra>
          </InputWrapper>
        </InputContainer>
        <ItemContainer>
          <ItemDetails>
            <ItemName>Origen</ItemName>
            <ItemPrice>{infoLocation[0]?.info ?? ""}</ItemPrice>
          </ItemDetails>
        </ItemContainer>
        <ItemContainer>
          <ItemDetails>
            <ItemName>Destino</ItemName>
            <ItemPrice>{infoLocation[1]?.info ?? ""}</ItemPrice>
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
            <ItemPrice>{routeInfo?.time ?? ""} min</ItemPrice>
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
        {transaction?.depositPrice && (
          <>
            <ItemContainer>
              <ItemDetails>
                <ItemName>Deposito de retiro</ItemName>
                <ItemPrice>{"$" + transaction?.depositPrice}</ItemPrice>
              </ItemDetails>
            </ItemContainer>
          </>
        )}
        <ItemContainer>
          <ItemDetails>
            <ItemName>Costo de envio</ItemName>
            <ItemPrice>
              {"$" + getRoutePrice(routeInfo?.distance ?? 0).toString()}
            </ItemPrice>
          </ItemDetails>
        </ItemContainer>
      </BoxContainer>
      <ContainerButton>
        <StyledButton
          id="step4-details"
          sx={{
            width: "100%",
            height: 40,
            pointerEvents: loadingButton ? "none" : "default",
          }}
          onClick={handleCreateTransaction}
          color={loadingButton ? "info" : "primary"}
          variant="contained"
          className="hidden-capture"
          disabled={!(transaction?.product?.length > 0) ?? true}
        >
          {!loadingButton ? "Confirmar" : "Procesando.."}
        </StyledButton>
      </ContainerButton>
    </Container>
  );
};

export default Details;
