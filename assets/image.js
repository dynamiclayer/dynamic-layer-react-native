import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ImagePrev(props) {
    return (
        <Svg
            viewBox="0 0 375 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill="#F6F6F6" d="M0 0H375V375H0z" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M154.667 164.667c0-5.523 4.477-10 10-10h46.666c5.523 0 10 4.477 10 10v46.666c0 5.523-4.477 10-10 10h-46.666c-5.523 0-10-4.477-10-10v-46.666zm60 28.619v-28.619a3.334 3.334 0 00-3.334-3.334h-46.666a3.334 3.334 0 00-3.334 3.334v28.619l4.074-4.074a3.667 3.667 0 015.186 0l7.407 7.407 17.407-17.407a3.667 3.667 0 015.186 0l14.074 14.074zm-53.334 9.428l6.667-6.667 7.407 7.408a3.667 3.667 0 005.186 0L198 186.047l16.667 16.667v8.619a3.334 3.334 0 01-3.334 3.334h-46.666a3.334 3.334 0 01-3.334-3.334v-8.619zm20-28.047a6.666 6.666 0 11-13.333 0 6.666 6.666 0 0113.333 0z"
                fill="#CBCBCB"
            />
        </Svg>
    );
}

export default ImagePrev;
