import * as React from "react";
import { SvgProps } from "../../interfaces";

const MenuPolygonSvg = ({className, onClick}:SvgProps) => (
  <svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="M7.25 3.567a.5.5 0 0 1 0 .866l-6 3.464a.5.5 0 0 1-.75-.433V.536a.5.5 0 0 1 .75-.433l6 3.464Z"
    />
  </svg>
);
export default MenuPolygonSvg;
