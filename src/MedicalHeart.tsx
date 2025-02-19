import * as React from "react";

function SvgMedicalHeart(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2 9C2 5.5188 4.37922 3 7.5 3C8.85081 3 9.95708 3.677 10.8007 4.45035C11.2467 4.8592 11.647 5.32021 12 5.77618C12.353 5.32021 12.7533 4.8592 13.1993 4.45035C14.0429 3.677 15.1492 3 16.5 3C19.6208 3 22 5.5188 22 9C22 11.397 20.3943 13.8903 18.5535 15.9215C16.6718 17.9979 14.3396 19.8149 12.4961 20.8682C12.1887 21.0439 11.8113 21.0439 11.5039 20.8682C9.66045 19.8149 7.32824 17.9979 5.44651 15.9215C3.60574 13.8903 2 11.397 2 9ZM13 8.75V12H16.25V14H13V17.25H11V14H7.75V12H11V8.75H13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedicalHeart;
