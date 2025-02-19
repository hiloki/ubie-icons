import * as React from "react";

function SvgFavoriteFill(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.5 3C4.37922 3 2 5.5188 2 9C2 11.397 3.60574 13.8903 5.44651 15.9215C7.32824 17.9979 9.66045 19.8149 11.5039 20.8682C11.8113 21.0439 12.1887 21.0439 12.4961 20.8682C14.3396 19.8149 16.6718 17.9979 18.5535 15.9215C20.3943 13.8903 22 11.397 22 9C22 5.5188 19.6208 3 16.5 3C15.1492 3 14.0429 3.677 13.1993 4.45035C12.7533 4.8592 12.353 5.32021 12 5.77618C11.647 5.32021 11.2467 4.8592 10.8007 4.45035C9.95708 3.677 8.85081 3 7.5 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFavoriteFill;
