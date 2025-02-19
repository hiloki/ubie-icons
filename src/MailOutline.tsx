import * as React from "react";

function SvgMailOutline(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 7H4V17H20V7ZM4 5C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.20006 6.40006C3.53143 5.95823 4.15823 5.86869 4.60006 6.20006L12.0001 11.7501L19.4001 6.20006C19.8419 5.86869 20.4687 5.95823 20.8001 6.40006C21.1314 6.84189 21.0419 7.46869 20.6001 7.80006L12.6001 13.8001C12.2445 14.0667 11.7556 14.0667 11.4001 13.8001L3.40006 7.80006C2.95823 7.46869 2.86869 6.84189 3.20006 6.40006Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMailOutline;
