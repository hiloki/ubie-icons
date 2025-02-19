import * as React from "react";

function SvgCommentBubble(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_1_4627" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 3C2.89543 3 2 3.89543 2 5V17C2 18.1046 2.89543 19 4 19H6V21C6 22.5 7.5 23 8.5 22L11.5 19H20C21.1046 19 22 18.1046 22 17V5C22 3.89543 21.1046 3 20 3H4Z"
        />
      </mask>
      <path
        d="M6 19H8V17H6V19ZM11.5 19V17H10.6716L10.0858 17.5858L11.5 19ZM4 5V1C1.79086 1 0 2.79086 0 5H4ZM4 17V5H0V17H4ZM4 17H4H0C0 19.2091 1.79086 21 4 21V17ZM6 17H4V21H6V17ZM8 21V19H4V21H8ZM7.08579 20.5858C7.06761 20.604 7.25119 20.4426 7.57725 20.5648C7.72911 20.6218 7.85361 20.7261 7.93059 20.8454C8.00703 20.9639 8 21.0376 8 21H4C4 22.4739 4.79417 23.7932 6.17275 24.3102C7.49881 24.8074 8.93239 24.396 9.91421 23.4142L7.08579 20.5858ZM10.0858 17.5858L7.08579 20.5858L9.91421 23.4142L12.9142 20.4142L10.0858 17.5858ZM20 17H11.5V21H20V17ZM20 17V21C22.2091 21 24 19.2091 24 17H20ZM20 5V17H24V5H20ZM20 5H24C24 2.79086 22.2091 1 20 1V5ZM4 5H20V1H4V5Z"
        fill="currentColor"
        mask="url(#path-1-inside-1_1_4627)"
      />
    </svg>
  );
}

export default SvgCommentBubble;
