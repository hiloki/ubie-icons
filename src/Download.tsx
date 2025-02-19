import * as React from "react";

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11 13C11 13 11 13 11 13L11 4C11 3.44771 11.4477 3 12 3C12.5523 3 13 3.44771 13 4L13 13L15.3999 11.2C15.8418 10.8686 16.4686 10.9582 16.7999 11.4C17.1313 11.8418 17.0418 12.4686 16.5999 12.8L12.5999 15.8C12.2444 16.0667 11.7555 16.0667 11.3999 15.8L7.39994 12.8C6.95811 12.4686 6.86857 11.8418 7.19994 11.4C7.53131 10.9582 8.15811 10.8686 8.59994 11.2L11 13ZM21 11C21.5523 11 22 11.4477 22 12V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12L4 19H20V12C20 11.4477 20.4477 11 21 11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownload;
