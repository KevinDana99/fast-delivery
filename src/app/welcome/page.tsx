"use client";
import React from "react";
import {
  AppContainer,
  ChangeUbicationIcon,
  Footer,
  FooterIcon,
  FooterLink,
  Grid,
  Header,
  Icon,
  SearchBar,
  SearchButton,
  SearchChangeIcon,
  SearchInput,
  SearchInputIcon,
  SearchInputWrapper,
  SearchLabel,
  WrapperMap,
} from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MapView from "@/components/ui/MapView";

const Dashboard = () => {
  return (
    <AppContainer>
      <Header>
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
              <SearchInput placeholder="Origen" />
              <SearchButton>
                <SearchChangeIcon>
                  <ChangeUbicationIcon fontSize={"small"} />
                </SearchChangeIcon>
              </SearchButton>
            </SearchInputWrapper>
          </SearchLabel>
        </SearchBar>
        <SearchBar>
          <SearchLabel>
            <SearchInputWrapper>
              <SearchInputIcon>
                <LocationOnIcon />
              </SearchInputIcon>
              <SearchInput placeholder="Destino" />
              <SearchButton>
                <SearchChangeIcon>
                  <ChangeUbicationIcon fontSize={"small"} />
                </SearchChangeIcon>
              </SearchButton>
            </SearchInputWrapper>
          </SearchLabel>
        </SearchBar>
      </Header>
      <WrapperMap>
        <MapView />
      </WrapperMap>
      <Footer>
        <FooterLink active={true}>
          <FooterIcon>{/* SVG content */}</FooterIcon>
        </FooterLink>
        <FooterLink>
          <FooterIcon>{/* SVG content */}</FooterIcon>
        </FooterLink>
        <FooterLink>
          <FooterIcon>{/* SVG content */}</FooterIcon>
        </FooterLink>
        <FooterLink>
          <FooterIcon>{/* SVG content */}</FooterIcon>
        </FooterLink>
        <FooterLink>
          <FooterIcon>{/* SVG content */}</FooterIcon>
        </FooterLink>
      </Footer>
    </AppContainer>
  );
};

export default Dashboard;
