import * as React from "react";

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 2H11.0005V4H4V20L19 20V12.9998H21V20C21 21.1046 20.1046 22 19 22L4 22C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2ZM20.3072 2.3072C19.9167 1.91668 19.2835 1.91668 18.893 2.3072L11.2587 9.94145C11.1638 10.0364 11.0889 10.1496 11.0386 10.2741L10.2433 12.2437C9.9346 13.0081 10.6316 13.7967 11.4282 13.5843L13.6837 12.983C13.8537 12.9377 14.0088 12.8483 14.1332 12.7239L21.7214 5.13563C22.1119 4.74511 22.1119 4.11194 21.7214 3.72142L20.3072 2.3072Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEdit;
