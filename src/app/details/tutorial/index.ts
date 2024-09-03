import { Tour, StepOptions } from "shepherd.js";

// Define the valid values for 'on'
type AttachToPlacement = "top" | "bottom" | "left" | "right";

export const handleDetailsTutorial = (tour: Tour): StepOptions[] => {
  const steps: StepOptions[] = [
    {
      classes:
        "shepherd-element-focused MuiTypography-root MuiTypography-body2 css-lgcz90-MuiTypography-root",
      title: "Nombre o descripcion del paquete",
      text: "Aqui debes colocar el nombre del paquete a enviar o una descripcion para que sepamos que estas enviando. Recuerda que cualquier paquete que no coincida con la descripcion se rechazara por considerarse no etico",
      attachTo: {
        element: "#step1-details",
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
      title: "Selecciona tu medio de pago preferido",
      text: "Puedes seleccionar como medios de pago efectivo o transferencia al alias que te damos",
      attachTo: {
        element: "#step2-details",
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
      title: "Monto a pagar para retirar el producto",
      text: "En este campo deberas especificar el monto a pagar para retirar el producto, si no se debe abonar puedes omitir este campo",
      attachTo: {
        element: "#step3-details",
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
      title: "Confirma tu pedido",
      text: "Hace click en confirmar y aguarda hasta que generemos el comprobante de tu pedido. ¡DEBERAS ENVIARLO PARA QUE ESTE SE TOME COMO VALIDO!",
      attachTo: {
        element: "#step4-details",
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
