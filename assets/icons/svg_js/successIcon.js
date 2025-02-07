import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SuccessIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.7071 10.7071C17.0976 10.3166 17.0976 9.68342 16.7071 9.29289C16.3166 8.90237 15.6834 8.90237 15.2929 9.29289L11 13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2222 15.6364C10.6518 16.066 11.3482 16.066 11.7778 15.6364L16.7071 10.7071Z"
      fill="#00DD00"
    />
  </Svg>
);
export default SuccessIcon;
