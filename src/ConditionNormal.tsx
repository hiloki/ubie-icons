import * as React from "react";

function SvgConditionNormal(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.25 11.5C9.94036 11.5 10.5 10.9404 10.5 10.25C10.5 9.55964 9.94036 9 9.25 9C8.55964 9 8 9.55964 8 10.25C8 10.9404 8.55964 11.5 9.25 11.5ZM16 10.25C16 10.9404 15.4404 11.5 14.75 11.5C14.0596 11.5 13.5 10.9404 13.5 10.25C13.5 9.55964 14.0596 9 14.75 9C15.4404 9 16 9.55964 16 10.25ZM10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16H14C14.5523 16 15 15.5523 15 15C15 14.4477 14.5522 14 13.9999 14H10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgConditionNormal;
