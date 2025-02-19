import * as React from "react";

function SvgLaptop(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V16H22C22.5523 16 23 16.4477 23 17C23 18.1046 22.1046 19 21 19H19H5H3C1.89543 19 1 18.1046 1 17C1 16.4477 1.44772 16 2 16H3V7ZM19 16H5V7H19V16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLaptop;
