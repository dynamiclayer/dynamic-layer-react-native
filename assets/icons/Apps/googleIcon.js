import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GoogleIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.464 12.4c0-.693-.077-1.386-.154-2.08h-9.626v3.928h5.467c-.23 1.232-.924 2.387-2.002 3.08v2.542h3.311c1.926-1.771 3.004-4.39 3.004-7.47z"
        fill="#4285F4"
      />
      <Path
        d="M12.684 22.333c2.772 0 5.082-.924 6.776-2.464l-3.311-2.54c-.924.615-2.08 1-3.465 1-2.618 0-4.929-1.771-5.699-4.235H3.597v2.618c1.771 3.465 5.237 5.621 9.087 5.621z"
        fill="#34A853"
      />
      <Path
        d="M6.986 14.094c-.462-1.232-.462-2.618 0-3.927V7.548H3.597c-1.463 2.85-1.463 6.238 0 9.164l3.389-2.618z"
        fill="#FBBC02"
      />
      <Path
        d="M12.684 6.008c1.463 0 2.85.54 3.927 1.54l2.926-2.926c-1.848-1.694-4.312-2.695-6.776-2.618-3.85 0-7.393 2.156-9.087 5.622l3.389 2.618c.693-2.464 3.003-4.236 5.62-4.236z"
        fill="#EA4335"
      />
    </Svg>
  )
}

export default GoogleIcon
