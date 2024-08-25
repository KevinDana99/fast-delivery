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
} from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { HeaderType } from "./types";
import useHeader from "./hooks/useHeader";
import Logo from "@/components/ui/Logo";

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
              {searchOptions?.origin?.map((option) => (
                <Option
                  onClick={() => handleSelectedLocation(option, "origin")}
                >
                  {option.address.road} {option.address?.house_number}
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
              {searchOptions?.destination?.map((option) => (
                <Option
                  onClick={() => handleSelectedLocation(option, "destination")}
                >
                  {option.address.road} {option.address?.house_number}
                </Option>
              ))}
            </Select>
          </SearchInputWrapper>
        </SearchLabel>
      </SearchBar>
    </Container>
  );
};

export default Header;
