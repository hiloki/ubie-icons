import * as React from "react";

function SvgMinusB(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11L8 11C7.44771 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13L16 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinusB;
