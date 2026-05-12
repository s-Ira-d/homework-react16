import React from "react";
import { Message } from "./Notification.styled.js";

export default function Notification({ message }) {
  return <Message>{message}</Message>;
}
