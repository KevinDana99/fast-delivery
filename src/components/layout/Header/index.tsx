import React, { MouseEventHandler } from "react";
import {
  Icon,
  SearchBar,
  SearchLabel,
  Container,
  SearchButton,
  SearchInput,
  SearchInputIcon,
  SearchInputWrapper,
} from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { HeaderType } from "./types";
import useHeader from "./hooks/useHeader";

const Header = ({ infoLocation, setInfoLocation }: HeaderType) => {
  const { handleChangeDestinationLocation, handleChangeOriginLocation } =
    useHeader({ infoLocation, setInfoLocation });
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
              value={infoLocation[0]?.info}
              onChange={handleChangeOriginLocation}
            />
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
              value={infoLocation[1]?.info}
              onChange={handleChangeDestinationLocation}
            />
            <SearchButton></SearchButton>
          </SearchInputWrapper>
        </SearchLabel>
      </SearchBar>
    </Container>
  );
};

export default Header;
