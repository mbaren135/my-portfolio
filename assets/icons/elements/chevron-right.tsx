import { IconProps } from "@/types";

/** SVG downloaded from "https://fonts.google.com/icons?selected=Material+Symbols+Outlined:chevron_right:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3" */

export default function ChevronRightIcon({
  size = "24px",
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill="currentColor"
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
}
