import React from "react";
import {
  Icon,
  SearchBar,
  SearchLabel,
  Container,
  CancelContainerButton,
  SearchInput,
  SearchInputIcon,
  SearchInputWrapper,
  Select,
  Option,
  IconCancel,
  MuiButton,
  ButtonLink,
} from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { HeaderType } from "./types";
import useHeader from "./hooks/useHeader";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import theme from "@/globals/theme";

const Header = ({ infoLocation, setInfoLocation }: HeaderType) => {
  const {
    handleChangeDestinationLocation,
    handleChangeOriginLocation,
    handleCleanInput,
    handleSelectedLocation,
    query,
    searchOptions,
  } = useHeader({
    infoLocation,
    setInfoLocation,
  });
  const enableButton = infoLocation[1]?.info && infoLocation[0]?.info;

  return (
    <Container>
      <Icon>
        <Logo />
      </Icon>

      <SearchBar>
        <SearchLabel>
          <SearchInputWrapper>
            <SearchInputIcon>
              <MyLocationIcon />
            </SearchInputIcon>
            <SearchInput
              id="step1-home"
              placeholder="Origen"
              value={query.origin}
              onChange={handleChangeOriginLocation}
            />

            <Select
              visible={
                searchOptions?.origin?.length !== 0 && !infoLocation[0]?.info
                  ? true
                  : false
              }
            >
              {searchOptions?.origin?.map((option, index) => (
                <Option
                  key={`key-${index}`}
                  onClick={() => handleSelectedLocation(option, "origin")}
                >
                  {option.address?.road} {option.address?.house_number}
                </Option>
              ))}
            </Select>
            <CancelContainerButton>
              <IconCancel
                color="inherit"
                onClick={() => handleCleanInput("origin")}
              />
            </CancelContainerButton>
          </SearchInputWrapper>
        </SearchLabel>
      </SearchBar>
      <SearchBar>
        <SearchLabel>
          <SearchInputWrapper>
            <SearchInputIcon>
              <LocationOnIcon />
            </SearchInputIcon>

            <SearchInput
              id="step2-home"
              placeholder="Destino"
              value={query.destination}
              onChange={handleChangeDestinationLocation}
            />

            <CancelContainerButton>
              <IconCancel
                color="inherit"
                onClick={() => handleCleanInput("destination")}
              />
            </CancelContainerButton>
            <Select
              visible={
                searchOptions?.destination?.length !== 0 &&
                !infoLocation[1]?.info
                  ? true
                  : false
              }
            >
              {searchOptions?.destination?.map((option, index) => (
                <Option
                  key={`key-${index}`}
                  onClick={() => handleSelectedLocation(option, "destination")}
                >
                  {option.address?.road} {option.address?.house_number}
                </Option>
              ))}
            </Select>
          </SearchInputWrapper>
        </SearchLabel>
      </SearchBar>

      <MuiButton
        color="secondary"
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
        variant="contained"
        disabled={!enableButton}
      >
        <ButtonLink href={"/details"} id="desktop-step4-home">
          Solicitar Envio
        </ButtonLink>
      </MuiButton>
    </Container>
  );
};

export default Header;
