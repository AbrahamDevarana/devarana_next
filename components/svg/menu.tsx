import { SvgProps } from '../../interfaces';

export const MenuSvg = ({className}:SvgProps) => {
  return (
      <svg
        width={40}
        height={13}
        viewBox="0 0 40 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M0 .5h40m-40 12h40" />
      </svg>
    );

}
