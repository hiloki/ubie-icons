import * as React from "react";

function SvgArrowARight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21.5848 11.2033C22.1391 11.5997 22.1383 12.4241 21.5831 12.8194L14.568 17.8143C13.911 18.2821 13 17.8123 13 17.0057L13 15C13 15 13 15 13 15L3 15C2.44771 15 2 14.5523 2 14V10C2 9.44772 2.44771 9 3 9L13 9V6.99433C13 6.18679 13.9128 5.71723 14.5696 6.1869L21.5848 11.2033Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArrowARight;
