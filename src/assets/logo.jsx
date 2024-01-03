export default function Logo({ isLightStyle = true }) {
  const color = isLightStyle ? "#ffffff" : "#1a1a1a";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 210 130">
      <g fillOpacity="1" transform="translate(-150 -80)">
        <path
          fill="#ff6d04"
          strokeWidth="0.436"
          d="M151.243 155.454v-40.723a4.518 4.518 135 014.518-4.518h40.723a1782.763 1782.763 179.855 009.037-.023l45.792-.232-4.878 43.647a324.427 324.427 97.174 01-1.128 8.965l-6.544 46.726-33.242.384a781.776 781.776 179.669 01-9.037.052h-40.723a4.518 4.518 45 01-4.518-4.518V164.49z"
          transform="matrix(.9993 0 0 1.00226 -1.137 -.207)"
        ></path>
        <path
          style={{ lineHeight: "1.25" }}
          fill={color}
          stroke="none"
          strokeWidth="1.001"
          d="M226.945 125.213l-69.175 29.304v12.81l69.175 29.302 4.162-12.33-56.844-23.377 56.844-23.38-4.162-12.329z"
          fontFamily="sans-serif"
          fontSize="160.125"
          fontStyle="normal"
          fontWeight="normal"
          transform="scale(.99852 1.00148)"
        ></path>
        <path
          fill="#0488ff"
          strokeWidth="0.436"
          d="M151.243 155.454v-40.723a4.518 4.518 135 014.518-4.518h40.723a1782.763 1782.763 179.855 009.037-.023l45.792-.232-4.878 43.647a324.427 324.427 97.174 01-1.128 8.965l-6.544 46.726-33.242.384a781.776 781.776 179.669 01-9.037.052h-40.723a4.518 4.518 45 01-4.518-4.518V164.49z"
          transform="matrix(-.9993 0 0 -1.00226 511.137 290.207)"
        ></path>
        <path
          style={{ lineHeight: "1.25" }}
          fill={color}
          stroke="none"
          strokeWidth="1.001"
          d="M-283.81-92.943l4.162-12.329-56.843-23.377 56.843-23.38-4.162-12.33-69.175 29.305v12.81l69.175 29.301z"
          fontFamily="sans-serif"
          fontSize="160.125"
          fontStyle="normal"
          fontWeight="normal"
          transform="scale(-.99852 -1.00148)"
        ></path>
      </g>
    </svg>
  );
}
