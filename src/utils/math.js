export const priceFormat = (value) => {
    return value.toFixed(2).replace(".", ",") + ' €';
}