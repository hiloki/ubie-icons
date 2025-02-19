import * as React from "react";

function SvgCancel(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.9056 18.3199C15.551 19.3729 13.8487 20 12 20C7.58172 20 4 16.4183 4 12C4 10.1513 4.62708 8.44904 5.68014 7.09436L16.9056 18.3199ZM18.3199 16.9056L7.09436 5.68014C8.44904 4.62708 10.1513 4 12 4C16.4183 4 20 7.58172 20 12C20 13.8487 19.3729 15.551 18.3199 16.9056ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCancel;
