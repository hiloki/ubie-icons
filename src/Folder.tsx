import * as React from "react";

function SvgFolder(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.86667 8L8.8 6H4V18H20V8H9.86667ZM11.0667 6L10.2824 4.52941C10.1086 4.20355 9.76931 4 9.4 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V7C22 6.44772 21.5523 6 21 6H11.0667Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolder;
