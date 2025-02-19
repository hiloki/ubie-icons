import * as React from "react";

function SvgTriangleUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.1251 4.49889L3.12061 18.6039C2.7624 19.2351 3.24512 20 4.00171 20H19.9983C20.7546 20 21.2373 19.2357 20.8797 18.6044L12.8876 4.49943C12.5104 3.83377 11.5027 3.83346 11.1251 4.49889Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTriangleUp;
