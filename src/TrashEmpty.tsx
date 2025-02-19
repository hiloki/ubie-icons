import * as React from "react";

function SvgTrashEmpty(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15 4H9V6H15V4ZM17 6V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V6H5H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H19H17ZM17 8H15H9H7V20H17V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrashEmpty;
