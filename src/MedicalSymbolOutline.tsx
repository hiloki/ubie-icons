import * as React from "react";

function SvgMedicalSymbolOutline(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.5 4C8.5 2.89543 9.39543 2 10.5 2H13.5C14.6046 2 15.5 2.89543 15.5 4V8.5H20C21.1046 8.5 22 9.39543 22 10.5V13.5C22 14.6046 21.1046 15.5 20 15.5H15.5V20C15.5 21.1046 14.6046 22 13.5 22H10.5C9.39543 22 8.5 21.1046 8.5 20L8.5 15.5H4C2.89543 15.5 2 14.6046 2 13.5V10.5C2 9.39543 2.89543 8.5 4 8.5H8.5L8.5 4ZM13.5 4L10.5 4L10.5 9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H4V13.5H9.5C9.76522 13.5 10.0196 13.6054 10.2071 13.7929C10.3946 13.9804 10.5 14.2348 10.5 14.5V20H13.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H20V10.5H14.5C13.9477 10.5 13.5 10.0523 13.5 9.5V4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedicalSymbolOutline;
