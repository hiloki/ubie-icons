import * as React from "react";

function SvgHospital(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 9H7.5V4L16.5 4V9H20V20H16V14C16 13.4477 15.5523 13 15 13H9C8.44772 13 8 13.4477 8 14V20H4V9ZM10 20H14V15H10V20ZM9 22H4C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7H5.5V4C5.5 2.89543 6.39543 2 7.5 2H16.5C17.6046 2 18.5 2.89543 18.5 4V7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H15H9ZM13 10.5V9H14.5V7H13V5.5L11 5.5V7H9.5V9H11V10.5H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHospital;
