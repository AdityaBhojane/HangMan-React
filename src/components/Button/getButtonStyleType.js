function getButtonStyling(styleType) {
    const primaryButtonStyling = "border border-[#7c7c00;] bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-800 hover:to-blue-400 text-[#fff] font-bold px-8";
    const secondaryButtonStyling = "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900";
    const warningButtonStyling = "border border-[#7c7c00;] bg-gradient-to-r from-yellow-500 to-yellow-800 hover:from-yellow-800 hover:to-yellow-500 text-[#fff] font-bold px-8";
    const errorButtonStyling = "bg-red-500 border border-red-700 hover:bg-red-600 hover:border-red-900";

    if(styleType === "primary") {
        return primaryButtonStyling;
    } else if(styleType === "secondary") {
        return secondaryButtonStyling;
    } else if(styleType === "warning") {
        return warningButtonStyling;
    } else if(styleType === "error") {
        return errorButtonStyling;
    } else {
        return primaryButtonStyling;
    }
}

export default getButtonStyling;