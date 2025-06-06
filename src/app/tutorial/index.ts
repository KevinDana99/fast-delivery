import { Tour, StepOptions } from "shepherd.js";

// Define the valid values for 'on'
type AttachToPlacement = "top" | "bottom" | "left" | "right";

export const handleHomeTutorial = (tour: Tour): StepOptions[] => {
  function getButtonSelector() {
    if (window.innerWidth <= 700) {
      return "#mobile-step4-home";
    } else {
      return "#desktop-step4-home";
    }
  }
  const steps: StepOptions[] = [
    {
      classes:
        "shepherd-element-focused MuiTypography-root MuiTypography-body2 css-lgcz90-MuiTypography-root",
      title: "Lugar de Origen del envio",
      text: "Aqui debes colocar el la ubicacion desde donde sale el paquete a enviar",
      attachTo: {
        element: "#step1-home",
        on: "top" as AttachToPlacement,
      },
      buttons: [
        {
          classes:
            "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary css-nqwe3o-MuiButtonBase-root-MuiButton-root ",
          text: "Siguiente",
          action: () => {
            tour.next();
          },
        },
      ],
    },

    {
      title: "Lugar de destino del envio",
      text: "Aqui debes colocar el lugar de destino a donde vas a enviar el paquete",
      attachTo: {
        element: "#step2-home",
        on: "top" as AttachToPlacement,
      },
      classes:
        "shepherd-element-focused MuiTypography-root MuiTypography-body2 css-lgcz90-MuiTypography-root",
      buttons: [
        {
          classes:
            "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary css-nqwe3o-MuiButtonBase-root-MuiButton-root",

          text: "Atras",
          action: tour.back,
        },
        {
          classes:
            "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary css-nqwe3o-MuiButtonBase-root-MuiButton-root",

          text: "Siguiente",
          action: () => {
            tour.next();
          },
        },
      ],
    },

    {
      classes:
        "shepherd-element-focused MuiTypography-root MuiTypography-body2 css-lgcz90-MuiTypography-root",
      title: "Selecciona la ubicacion de origen y destino en el mapa",
      text: "Tambien podes seleccionar la ubicacion desde el mapa, hace click en el mapa para marcar un punto de origen y destino.",
      attachTo: {
        element: "#step3-home",
        on: "bottom" as AttachToPlacement,
      },
      buttons: [
        {
          classes:
            "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary css-nqwe3o-MuiButtonBase-root-MuiButton-root",

          text: "Atras",
          action: tour.back,
        },
        {
          classes:
            "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary css-nqwe3o-MuiButtonBase-root-MuiButton-root",

          text: "Siguiente",
          action: tour.next,
        },
      ],
    },

    {
      classes:
        "shepherd-element-focused MuiTypography-root MuiTypography-body2 css-lgcz90-MuiTypography-root",
      title: "Solicita tu envio!",
      text: "Una vez seleccionada la ubicacion, hace click en el boton solicitar envio para continuar",
      attachTo: {
        element: getButtonSelector(),
        on: "bottom" as AttachToPlacement,
      },
      buttons: [
        {
          classes:
            "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary css-nqwe3o-MuiButtonBase-root-MuiButton-root",

          text: "Atras",
          action: tour.back,
        },
        {
          classes:
            "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-colorPrimary css-nqwe3o-MuiButtonBase-root-MuiButton-root",

          text: "Finalizar",
          action: tour.complete,
        },
      ],
    },
  ];

  return steps;
};
