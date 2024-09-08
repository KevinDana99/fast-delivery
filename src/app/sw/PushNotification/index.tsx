"use client";
import urlBase64ToUint8Array from "@/utils/urlBase64ToUint8Array";
import { useEffect, useState } from "react";
import PushNotificationModal from "@/components/ui/modals/PushNotificationModal";

const PushNotification = ({ visible }: { visible: boolean }) => {
  const [notificationPermission, setNotificationPermission] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const visibleModal = notificationPermission ? false : true;

  const handleRequestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission();
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
    if (window.Notification) {
      if (Notification.permission === "granted") {
        setNotificationPermission(true);
        //handleSubscribeUserToPush();
      } else if (Notification.permission === "default") {
        setNotificationPermission(null);
      } else {
        setNotificationPermission(false);
      }
    }
  }, []);

  return (
    <PushNotificationModal
      notificationPermission={notificationPermission}
      visible={visibleModal && visible}
      handleAceptNotifications={handleRequestNotificationPermission}
    />
  );
};

export default PushNotification;
