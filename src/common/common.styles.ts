import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");
const widthScaleRatio = width / 375;
const scale = (dp: number) => PixelRatio.roundToNearestPixel(dp * widthScaleRatio);

const Styles = {
    scale,
    layout: {
        margin: scale(12),
        deviceWidth: Dimensions.get("window").width,
        tabHeight: scale(48)
    },
    font: {
        large: scale(24),
        medium: scale(18),
        small: scale(14),
        tiny: scale(12)
    },
    color: {
        main: "#ff8888",
        white: "#ffffff",
        whiteGray: "#f8f8f8",
        gray0: "#d7d7d7",
        gray1: "#b2b2b2",
        gray2: "#949494",
        gray3: "#7e7e7e",
        gray4: "#4f4f4f",
        gray5: "#424242",
        yellow: '#ffca5c'
    }
};
export default Styles;
