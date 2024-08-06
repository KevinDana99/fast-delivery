"use client";
import React from "react";
import {
  AppContainer,
  Card,
  CardImage,
  CardSubText,
  CardText,
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
} from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MapView from "@/components/ui/MapView";
import "mapbox-gl/dist/mapbox-gl.css";
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
      </Header>
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
      <MapView />
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
