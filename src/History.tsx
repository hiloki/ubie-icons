import * as React from "react";

function SvgHistory(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V13C11 13.3788 11.214 13.725 11.5528 13.8944L15.5528 15.8944C16.0468 16.1414 16.6474 15.9412 16.8944 15.4472C17.1414 14.9532 16.9412 14.3526 16.4472 14.1056L13 12.382V7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHistory;
