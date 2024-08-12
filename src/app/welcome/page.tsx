"use client";
import React, { useEffect, useState } from "react";
import {
  AppContainer,
  ChangeUbicationIcon,
  CotizationButton,
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
  ButtonFooterLink,
} from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import MapView from "@/components/ui/MapView";
import { LocationType, RouteInfo } from "./types";

const Dashboard = () => {
  const [infoLocation, setInfoLocation] = useState<LocationType[]>([]);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const originLocation = [
    infoLocation[0]?.marker[0],
    infoLocation[0]?.marker[1],
  ];
  const destinationLocation = [
    infoLocation[1]?.marker[0],
    infoLocation[1]?.marker[1],
  ];
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
              <SearchInput
                placeholder="Origen"
                value={infoLocation[0]?.info ?? ""}
              />
              <SearchButton>
                <SearchChangeIcon>
                  {/* <ChangeUbicationIcon fontSize={"small"} /> */}
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
              <SearchInput
                placeholder="Destino"
                value={infoLocation[1]?.info ?? ""}
              />
              <SearchButton>
                <SearchChangeIcon>
                  {/* <ChangeUbicationIcon fontSize={"small"} /> */}
                </SearchChangeIcon>
              </SearchButton>
            </SearchInputWrapper>
          </SearchLabel>
        </SearchBar>
      </Header>
      <WrapperMap>
        <MapView
          setInfoLocation={setInfoLocation}
          locationInfo={infoLocation}
          setRouteInfo={setRouteInfo}
          routeInfo={routeInfo}
        />
      </WrapperMap>
      <Footer>
        {destinationLocation[0] && (
          <FooterLink>
            <ButtonFooterLink
              target="_blank"
              href={`https://wa.me/?text=https://www.google.com/maps/dir/${originLocation[0]},${originLocation[1]}/${destinationLocation[0]},${destinationLocation[1]}`}
            >
              Confirmar
            </ButtonFooterLink>
          </FooterLink>
        )}
      </Footer>
    </AppContainer>
  );
};

export default Dashboard;
