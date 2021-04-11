import apiInstance from "./instance-util"

export const getNoodles = () => {
    return apiInstance.get('TopRamen8d30951.json');
};

export const getImages = () => {
    return apiInstance.get('noodlesec253ad.json');
};
