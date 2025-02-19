import * as React from "react";

function SvgHomeOutline(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.6741 2.50256C11.4309 1.83248 12.5688 1.83248 13.3256 2.50256L21.3234 9.58345C22.7018 10.8038 21.841 13 20 13H19.0001V20C19.0001 21.1046 18.1046 22 17.0001 22H14H13L13 20V15H11L11 19V22H10H7.00005C5.89548 22 5.00005 21.1046 5.00005 20V13H4.00207C2.16109 13 1.29792 10.8038 2.67629 9.58346L10.6741 2.50256ZM17.0001 20H15V14C15 13.4477 14.5523 13 14 13H10C9.44771 13 9 13.4477 9 14V20H7.00005V11H4.00206L11.9998 4L20 11H17.0001V20Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeOutline;
