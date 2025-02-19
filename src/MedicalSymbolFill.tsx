import * as React from "react";

function SvgMedicalSymbolFill(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.5 4C14.5 3.44772 14.0523 3 13.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4L9.5 9.5H4C3.44772 9.5 3 9.94772 3 10.5V13.5C3 14.0523 3.44772 14.5 4 14.5H9.5L9.5 20C9.5 20.5523 9.94772 21 10.5 21H13.5C14.0523 21 14.5 20.5523 14.5 20V14.5H20C20.5523 14.5 21 14.0523 21 13.5V10.5C21 9.94772 20.5523 9.5 20 9.5H14.5V4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedicalSymbolFill;
