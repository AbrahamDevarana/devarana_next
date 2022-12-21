import { SvgProps } from "../../interfaces";

const RightArrowSvg = ({className}:SvgProps) => (
  <svg
    viewBox="0 0 16 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15.354 4.354a.5.5 0 0 0 0-.708L12.172.464a.5.5 0 1 0-.708.708L14.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h15v-1H0v1Z"
    />
  </svg>
);
export default RightArrowSvg;
