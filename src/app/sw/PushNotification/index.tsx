"use client";
import urlBase64ToUint8Array from "@/utils/urlBase64ToUint8Array";
import { useEffect, useState } from "react";
import { Box, Button, Dialog, Typography } from "@mui/material";
import PushNotificationModal from "@/components/ui/modals/PushNotificationModal";

const PushNotification = () => {
  const [notificationPermission, setNotificationPermission] = useState(false);
  const [subscription, setSubscription] = useState(null);

  const handleRequestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("granted");
          setNotificationPermission(true);
        } else {
          console.log("not granted");
          setNotificationPermission(false);
        }
      });
    }
  };

  const handleSubscribeUserToPush = () => {
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
      const applicationServerKey = urlBase64ToUint8Array("<TU_CLAVE_VAPID>");
      serviceWorkerRegistration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey,
        })
        .then(function (subscription) {
          console.log("Usuario suscrito:", subscription);
          setSubscription(subscription);
          // Envía la suscripción al servidor para almacenar y enviar notificaciones
        })
        .catch(function (error) {
          console.error("Error al suscribirse:", error);
        });
    });
  };
  useEffect(() => {
    handleRequestNotificationPermission();
  }, []);

  useEffect(() => {
    if (notificationPermission) {
      console.log("subscribiendo user");
      //handleSubscribeUserToPush();
    }
  }, [notificationPermission]);
  return (
    <PushNotificationModal
      visible={!notificationPermission}
      handleAceptNotifications={handleRequestNotificationPermission}
    />
  );
};

export default PushNotification;
