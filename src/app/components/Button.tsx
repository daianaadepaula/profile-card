"use client";

import { cn } from './../../lib/utils';
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  text?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  variant?: "default" | "follow" | "success";
  className?: string;
  ariaLabel?: string;
  ariaPressed?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export enum ButtonVariant {
  Default = "default",
  Follow = "follow",
  Success = "success",
}

const Button = ({
  text,
  icon: Icon,
  onClick,
  variant = ButtonVariant.Default,
  className = "",
  ariaLabel,
  ariaPressed,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "flex justify-center items-center w-[130px] md:w-[150px] h-12 rounded-xl space-x-2 font-semibold text-xs md:text-sm transition-all shadow-lg hover:opacity-80 hover:scale-105 hover:brightness-90 active:scale-95 transition-transform duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white";

  const variants = {
    default: "text-gray-400 bg-gray-600",
    follow:
      "text-white bg-gradient-follow shadow-green/30 hover:shadow-lg hover:shadow-green/40",
    success:
      "text-white bg-green shadow-green/30 hover:shadow-lg hover:shadow-green/40",
    disabled: "opacity-50 cursor-not-allowed",
  };

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      disabled={disabled}
      type={type}
      className={cn(
        baseStyles,
        variants[variant],
        disabled && variants.disabled,
        className
      )}
    >
      {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
