export const statusInfo = {
  pending: "Su pedido esta pendiente (Esperando confirmacion)",
  completed: "Su pedido ha sido completado con exito",
  "in-origin": "Su pedido fue retirado",
  "in-destine": "Estamos entregando tu pedido",
  canceled: "Su pedido ha sido cancelado",
  "in-course": "Su pedido esta en camino",
};

export type StatusShipmentType = {
  status: keyof typeof statusInfo;
};
