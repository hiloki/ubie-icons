import * as React from "react";

function SvgBlanckLink(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V8C22 8.55229 21.5523 9 21 9C20.4477 9 20 8.55228 20 8V5.41405L10.7069 14.7071C10.3164 15.0976 9.68324 15.0976 9.29271 14.7071C8.90219 14.3166 8.90219 13.6834 9.29271 13.2929L18.5856 4L16 4C15.4477 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289ZM4 4.00003L11 4.00003L11 6.00003L4 6.00003V20H18V12.9998H20V20C20 21.1046 19.1046 22 18 22H4C2.89543 22 2 21.1046 2 20L2 6.00003C2 4.89546 2.89543 4.00003 4 4.00003Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBlanckLink;
