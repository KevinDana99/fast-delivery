"use client";
import urlBase64ToUint8Array from "@/utils/urlBase64ToUint8Array";
import { useEffect, useState } from "react";

const PushNotification = () => {
  const [notificationPermission, setNotificationPermission] = useState(false);
  const [subscription, setSubscription] = useState(null);

  const handleRequestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          setNotificationPermission(false);
        } else {
          setNotificationPermission(true);
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

    if (notificationPermission) {
      handleSubscribeUserToPush();
    }
  }, []);
  return null;
};

export default PushNotification;
