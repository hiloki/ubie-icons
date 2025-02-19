import * as React from "react";

function SvgShare(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.6 2.2C12.2444 1.93333 11.7556 1.93333 11.4 2.2L7.4 5.2C6.95817 5.53137 6.86863 6.15817 7.2 6.6C7.53137 7.04183 8.15817 7.13137 8.6 6.8L11 5V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V5L15.4 6.8C15.8418 7.13137 16.4686 7.04183 16.8 6.6C17.1314 6.15817 17.0418 5.53137 16.6 5.2L12.6 2.2ZM15 12H19V20H5L5 12H9L9 10H4C3.44772 10 3 10.4477 3 11V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V11C21 10.4477 20.5523 10 20 10H15V12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShare;
