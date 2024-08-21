import React from "react";
import {
  Icon,
  SearchBar,
  SearchLabel,
  Container,
  SearchButton,
  SearchInput,
  SearchInputIcon,
  SearchInputWrapper,
  Select,
  Option,
} from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { HeaderType } from "./types";
import useHeader from "./hooks/useHeader";

const Header = ({ infoLocation, setInfoLocation }: HeaderType) => {
  const {
    handleChangeDestinationLocation,
    handleChangeOriginLocation,
    query,
    searchOptions,
  } = useHeader({ infoLocation, setInfoLocation });

  return (
    <Container>
      <Icon>
        <Image
          src="/logo.png"
          alt="logo-fast-delivery"
          width={35}
          height={35}
        />
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
                searchOptions?.origin?.length !== 0 && query.origin
                  ? true
                  : false
              }
            >
              {searchOptions?.origin?.map(({ address }) => (
                <Option>
                  {address.road} {address?.house_number}
                </Option>
              ))}
            </Select>
            <SearchButton></SearchButton>
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

            <SearchButton></SearchButton>
            <Select
              visible={
                searchOptions?.destination?.length !== 0 && query.destination
                  ? true
                  : false
              }
            >
              {searchOptions?.destination?.map(({ address }) => (
                <Option>
                  {address.road} {address?.house_number}
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
