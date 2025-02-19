import * as React from "react";

function SvgPostalCode(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H4ZM3 9C3 8.44772 3.44772 8 4 8H12H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H13L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 10H4C3.44772 10 3 9.55228 3 9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPostalCode;
