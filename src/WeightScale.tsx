import * as React from "react";

function SvgWeightScale(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 5.25C4 5.12284 4.0409 5.03985 4.07066 5H19.9293C19.9591 5.03985 20 5.12284 20 5.25V18.75C20 18.8772 19.9591 18.9602 19.9293 19H4.07066C4.0409 18.9602 4 18.8772 4 18.75V5.25ZM2 5.25C2 4.00736 2.89543 3 4 3H20C21.1046 3 22 4.00736 22 5.25V18.75C22 19.9926 21.1046 21 20 21H4C2.89543 21 2 19.9926 2 18.75V5.25ZM9 7H15C15.5523 7 16 7.44772 16 8V10C16 10.5523 15.5523 11 15 11H13.4929L14.61 9.43599C14.8508 9.09893 14.7727 8.63052 14.4357 8.38976C14.0986 8.14901 13.6302 8.22707 13.3894 8.56413L11.6495 11H9C8.44772 11 8 10.5523 8 10V8C8 7.44772 8.44772 7 9 7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWeightScale;
