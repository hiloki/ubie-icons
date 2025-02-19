import * as React from "react";

function SvgArrowBRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.7474 12.6644C17.0842 12.2855 17.0842 11.7145 16.7474 11.3356L8.74741 2.33562C8.38049 1.92284 7.74842 1.88566 7.33564 2.25258C6.92285 2.6195 6.88567 3.25157 7.25259 3.66435L14.662 12L7.25259 20.3356C6.88567 20.7484 6.92285 21.3805 7.33564 21.7474C7.74842 22.1143 8.38049 22.0771 8.74741 21.6644L16.7474 12.6644Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowBRight;
