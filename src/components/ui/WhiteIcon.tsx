import { WHITE_ICON_HEIGHT, WHITE_ICON_STROKE_WIDTH, WHITE_ICON_WIDTH } from "@/lib/constants";
import * as React from "react";

export function WhiteIcon({
  stroke = "currentColor",
  width = WHITE_ICON_WIDTH,
  height = WHITE_ICON_HEIGHT,
  strokeWidth = WHITE_ICON_STROKE_WIDTH,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 84 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <path d="M82 73L59.3287 46L54 51.0625" stroke={stroke} strokeWidth={strokeWidth}/>
      <path d="M2 73L25.0294 46L31 51.625" stroke={stroke} strokeWidth={strokeWidth}/>
      <path d="M16 73L42.7428 36L68 73" stroke={stroke} strokeWidth={strokeWidth}/>
      <path d="M17.5 38L51.5089 3L58 9.83145M34.7758 35.9296L42.0172 28.2537M49.2586 9.83145L55.0517 15.9722L42.0172 28.2537M42.0172 28.2537V35.9296M35.5 28.2537L47.5 15.9722" stroke={stroke} strokeWidth={strokeWidth}/>
    </svg>
  );
}