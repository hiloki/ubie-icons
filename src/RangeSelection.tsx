import * as React from "react";

function SvgRangeSelection(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 3C2 2.44772 2.44772 2 3 2H4V4H2V3ZM5.6 2H7.6V4H5.6V2ZM9.2 2H11.2V4H9.2V2ZM12.8 2H14.8V4H12.8V2ZM16.4 2H18.4V4H16.4V2ZM20 2H21C21.5523 2 22 2.44772 22 3V4L20 4V2ZM22 5.6V7.6H20V5.6H22ZM2 7.6V5.6H4V7.6H2ZM2 11.2V9.2H4V11.2H2ZM22 9.2V11.2H20V9.2H22ZM2 14.8V12.8H4V14.8H2ZM22 12.8V14.8H20V12.8H22ZM2 18.4V16.4H4V18.4H2ZM22 16.4V18.4H20V16.4H22ZM2 21V20H4V22H3C2.44772 22 2 21.5523 2 21ZM7.6 22H5.6V20H7.6V22ZM11.2 22H9.2V20H11.2V22ZM14.8 22H12.8V20H14.8V22ZM18.4 22H16.4V20H18.4V22ZM20 20H22V21C22 21.5523 21.5523 22 21 22H20V20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRangeSelection;
