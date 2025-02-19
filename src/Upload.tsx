import * as React from "react";

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.6001 3.2C12.2445 2.93333 11.7556 2.93333 11.4001 3.2L7.40006 6.2C6.95823 6.53137 6.86869 7.15817 7.20006 7.6C7.53143 8.04183 8.15823 8.13137 8.60006 7.8L11 6.00004L11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15L13 6C13 5.99999 13 5.99997 13 5.99996L15.4001 7.8C15.8419 8.13137 16.4687 8.04183 16.8001 7.6C17.1314 7.15817 17.0419 6.53137 16.6001 6.2L12.6001 3.2ZM21 11C21.5523 11 22 11.4477 22 12V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12L4 19H20V12C20 11.4477 20.4477 11 21 11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpload;
