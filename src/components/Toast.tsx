"use client";

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <div className={`toast${visible ? " show" : ""}`}>
      <span className="toast-msg">{message}</span>
    </div>
  );
}
