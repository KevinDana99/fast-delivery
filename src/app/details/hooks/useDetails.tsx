import useTutorial from "@/app/hooks/useTutorial";
import { RouteContext } from "@/contexts/routeContext";
import html2canvas from "html2canvas";
import { useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TransactionType = {
  type?: "transfer" | "cash";
  product?: string;
  depositPrice?: string;
};

const useDetails = () => {
  const [transaction, setTransaction] = useState<TransactionType>(null);
  const { infoLocation, routeInfo, originLocation, destinationLocation } =
    useContext(RouteContext);
  const captureRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const tourRef = useRef(false);
  useTutorial("details", tourRef);
  const originParam = originLocation.toString();
  const destinationParam = destinationLocation.toString();
  const sendLinkToWhatsApp = (id: number, imageUrl: string) => {
    const phoneNumber = "542804670313";
    const text = `Comprobante de envio: ${imageUrl}. Podes seguir tu envio desde ${window.location.href.replace(
      "/details",
      "/"
    )}?shipment=${id}&coords=${btoa(originParam + "," + destinationParam)}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(url, "_blank");
  };

  const uploadImageToImgBB = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", "c73710a57090e61d34266a8d4a09c14b");

    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.data.url_viewer;
  };

  const handleCapture = async (id: number) => {
    const dataURLToBase64 = (dataURL: string) => {
      return dataURL.split(",")[1];
    };
    try {
      setLoading(true);
      if (captureRef.current) {
        const canvas = await html2canvas(captureRef.current, {
          ignoreElements: (element) => {
            return element.classList.contains("hidden-capture");
          },
        });
        const dataUrl = canvas.toDataURL("image/png");
        const base64 = dataURLToBase64(dataUrl);
        const imageUrl = await uploadImageToImgBB(base64);

        sendLinkToWhatsApp(id, imageUrl);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTransactionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const transactionType = e.target.value as TransactionType["type"];
    setTransaction({
      ...transaction,
      type: transactionType,
    });
  };

  const handleTransactionProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const productValue = e.target.value;
    setTransaction({
      ...transaction,
      product: productValue,
    });
  };

  const getTransactionType = (value: TransactionType["type"]) => {
    switch (value) {
      case "transfer":
        return "Transferencia";

      case "cash":
        return "Efectivo";

      default:
        return "Transferencia";
    }
  };

  const handleCopyToClipboard = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLInputElement;
    const text = element.value;
    navigator.clipboard.writeText(text);
    element.select();
  };

  const handleOnChangeExtraPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const depositPrice = e.target.value;

    if (depositPrice.length <= 5) {
      setTransaction({
        ...transaction,
        depositPrice,
      });
    } else {
      setTransaction({
        ...transaction,
        depositPrice: transaction.depositPrice,
      });
    }
  };

  const handleCreateTransaction = async () => {
    const clientId = uuidv4();
    await handleCapture(clientId);

    const redirectUri = ` ${window.location.href.replace(
      "/details",
      "/"
    )}?shipment=${clientId}&coords=${btoa(
      originParam + "," + destinationParam
    )}`;
    window.location.href = redirectUri;
  };
  return {
    infoLocation,
    routeInfo,
    transaction,
    loading,
    handleCapture,
    handleTransactionType,
    handleTransactionProduct,
    getTransactionType,
    handleOnChangeExtraPrice,
    handleCopyToClipboard,
    handleCreateTransaction,
    captureRef,
  };
};

export default useDetails;
