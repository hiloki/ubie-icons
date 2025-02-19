import * as React from "react";

function SvgMedicalId(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 7H20V17H4V7ZM2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7ZM6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15H12C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13H6ZM17.5 11.5002V13H15.5V11.5002H14V9.50024H15.5V8H17.5V9.50024H19V11.5002H17.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedicalId;
