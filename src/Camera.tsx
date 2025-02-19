import * as React from "react";

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.2 8H7.33238L7.91499 7.02899L9.13238 5H14.8676L16.085 7.02899L16.6676 8H17.8H20V19H4V8H6.2ZM8.56619 3C8.21493 3 7.88942 3.1843 7.7087 3.4855L6.2 6H3C2.44772 6 2 6.44772 2 7V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V7C22 6.44772 21.5523 6 21 6H17.8L16.2913 3.4855C16.1106 3.1843 15.7851 3 15.4338 3H8.56619ZM15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13ZM17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCamera;
