import * as React from "react";

function SvgPin(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.9998 8.2961V8.29639H18C18 12.8862 14.8029 18.3613 12.8693 21.5217C12.4753 22.1657 11.5314 22.1557 11.1555 21.5009C6.87887 14.0506 5.93425 9.91669 6.00346 8.51183C6.00116 8.44022 6 8.3683 6 8.2961C6 4.81886 8.68624 2 11.9999 2C15.3135 2 17.9998 4.81886 17.9998 8.2961ZM12 11.0303C13.6569 11.0303 15 9.68262 15 8.02019C15 6.35776 13.6569 5.01009 12 5.01009C10.3431 5.01009 9 6.35776 9 8.02019C9 9.68262 10.3431 11.0303 12 11.0303Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPin;
