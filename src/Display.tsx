import * as React from "react";

function SvgDisplay(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H14V19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H14H10H7C6.44771 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H10V17H4C2.89543 17 2 16.1046 2 15V5ZM4 5H20V14H4V5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDisplay;
