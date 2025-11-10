"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  text: string;
  icon?: LucideIcon;
  onClick?: () => void;
  variant?: "default" | "follow" | "success";
  className?: string;
}

const Button = ({
  text,
  icon: Icon,
  onClick,
  variant = "default",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "flex justify-center items-center w-[150px] h-12 rounded-xl space-x-2 font-semibold text-sm transition-all duration-300 shadow-lg hover:opacity-80  cursor-pointer";

  const variants = {
    default: "text-gray-400 bg-gray-600",
    follow: "text-white bg-gradient-follow shadow-green/30",
    success: "text-white bg-green shadow-green/30",
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {Icon && <Icon size={24} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
