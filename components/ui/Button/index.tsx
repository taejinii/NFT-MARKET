"use client";
import { MouseEventHandler, ReactElement } from "react";
interface ButtonType {
  children: ReactElement | string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  variant?: "primary" | "success" | "error";
  onClickAction?: MouseEventHandler<HTMLButtonElement>;
}
const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-4 text-lg",
};
const variantColor = {
  primary: "text-white bg-blue-500 hover:bg-blue-600",
  success: "text-white bg-green-600 hover:bg-green-700",
  error: "text-white bg-red-600 hover:bg-red-700",
};
export default function Button({
  children = "",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  variant = "primary",
  onClickAction = () =>
    console.error("무엇을 위한 버튼 인가요? 이벤트가 설정 되어있지 않습니다."),
}: ButtonType) {
  const sizeClass = sizes[size];
  const widthClass = fullWidth && "w-full";
  const variantClass = variantColor[variant];
  const disabledClass = disabled && "opacity-50 cursor-auto";
  return (
    <button
      onClick={onClickAction}
      disabled={disabled}
      className={`rounded-lg font-bold ${sizeClass} ${widthClass} ${className} ${variantClass} ${disabledClass}`}
    >
      {children}
    </button>
  );
}
