import * as React from "react";

function SvgDoctorBag(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9 5H15V6H9V5ZM7 6V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V6H20C21.1046 6 22 6.89543 22 8V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V8C2 6.89543 2.89543 6 4 6H7ZM15 8H9H4L4 9.25L20 9.25V8H15ZM4 16.25L4 10.75L20 10.75V16.25L4 16.25ZM4 17.75V19H20V17.75L4 17.75ZM12.7499 14.2502V15.75H11.2499V14.2502H9.75V12.7502H11.2499V11.25H12.7499V12.7502H14.25V14.2502H12.7499Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDoctorBag;
