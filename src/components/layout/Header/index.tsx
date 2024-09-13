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
import useHeader from "./hooks/useHeader";
import Logo from "@/components/ui/Logo";
import theme from "@/globals/theme";

const Header = () => {
  const {
    handleChangeDestinationLocation,
    handleChangeOriginLocation,
    handleCleanInput,
    handleSelectedDestinationLocation,
    handleSelectedOriginLocation,
    handleOnKeyDownInputDestination,
    handleOnKeyDownInputOrigin,
    getDisplayNameLocation,
    infoLocation,
    query,
    searchOptions,
    enableHeaderButton,
    myLocation,
  } = useHeader();

  console.log(query);

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
              onKeyDown={handleOnKeyDownInputOrigin}
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
                  onClick={() => handleSelectedOriginLocation(option)}
                >
                  {getDisplayNameLocation(option)}
                </Option>
              ))}
            </Select>
            <CancelContainerButton>
              <IconCancel
                visible={
                  query?.origin?.length !== 0 || infoLocation[0]?.info
                    ? true
                    : false
                }
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
              onKeyDown={handleOnKeyDownInputDestination}
            />

            <CancelContainerButton>
              <IconCancel
                visible={
                  query?.destination?.length !== 0 || infoLocation[0]?.info
                    ? true
                    : false
                }
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
                  onClick={() => handleSelectedDestinationLocation(option)}
                >
                  {getDisplayNameLocation(option)}
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
          background: !enableHeaderButton ? "#c6c6c6 !important" : null,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: theme.colors.background,
          },
        }}
        variant="contained"
        disabled={!enableHeaderButton}
      >
        <ButtonLink href={"/details"} id="desktop-step4-home">
          Solicitar Envio
        </ButtonLink>
      </MuiButton>
    </Container>
  );
};

export default Header;
