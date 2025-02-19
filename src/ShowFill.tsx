import * as React from "react";

function SvgShowFill(props: React.SVGProps<SVGSVGElement>) {
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
        d="M1.05716 11.6668C2.64957 7.16143 6.94625 3.93115 12 3.93115C17.0537 3.93115 21.3504 7.16144 22.9428 11.6668C23.019 11.8824 23.019 12.1177 22.9428 12.3333C21.3504 16.8386 17.0537 20.0689 12 20.0689C6.94625 20.0689 2.64957 16.8386 1.05716 12.3333C0.980947 12.1176 0.980947 11.8824 1.05716 11.6668ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShowFill;
