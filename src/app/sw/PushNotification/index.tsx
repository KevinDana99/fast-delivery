"use client";
import urlBase64ToUint8Array from "@/utils/urlBase64ToUint8Array";
import { useEffect, useState } from "react";
import { Box, Button, Dialog, Typography } from "@mui/material";
import PushNotificationModal from "@/components/ui/modals/PushNotificationModal";
import Cookie from "js-cookie";

const PushNotification = () => {
  const [notificationPermission, setNotificationPermission] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const visibleModal = notificationPermission ? false : true;

  const handleRequestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("granted");
        } else {
          console.log("not granted");
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
    window.location.href = "chrome://settings/content/notifications";
    if (Notification.permission === "granted") {
      setNotificationPermission(true);
    } else if (Notification.permission === "default") {
      setNotificationPermission(null);
    } else {
      setNotificationPermission(false);
    }
  }, []);

  console.log({ notificationPermission });

  console.log({ visibleModal });
  return (
    <PushNotificationModal
      notificationPermission={notificationPermission}
      visible={visibleModal}
      handleAceptNotifications={handleRequestNotificationPermission}
    />
  );
};

export default PushNotification;
