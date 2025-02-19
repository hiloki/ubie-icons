import * as React from "react";

function SvgDevices(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 7C3 5.89543 3.89543 5 5 5H18V7H5V16H12V19H5H3C1.89543 19 1 18.1046 1 17C1 16.4477 1.44772 16 2 16H3V7ZM14 10C14 9.44771 14.4477 9 15 9H21C21.5523 9 22 9.44772 22 10V20C22 20.5523 21.5523 21 21 21H15C14.4477 21 14 20.5523 14 20V10ZM16 18V11H20V18H16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDevices;
