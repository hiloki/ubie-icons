import * as React from "react";

function SvgInsuranceCard(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 7H4V8.25L20 8.25V7ZM4 17L4 9.75L20 9.75V17H4ZM4 5C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4ZM6 14.25C5.58579 14.25 5.25 14.5858 5.25 15C5.25 15.4142 5.58579 15.75 6 15.75L13 15.75C13.4142 15.75 13.75 15.4142 13.75 15C13.75 14.5858 13.4142 14.25 13 14.25L6 14.25ZM5.25 12C5.25 11.5858 5.58579 11.25 6 11.25L13 11.25C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75L6 12.75C5.58579 12.75 5.25 12.4142 5.25 12ZM16 11.25C15.5858 11.25 15.25 11.5858 15.25 12C15.25 12.4142 15.5858 12.75 16 12.75L18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25L16 11.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInsuranceCard;
