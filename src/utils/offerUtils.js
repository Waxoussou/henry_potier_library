export const applyPercentage = (price, offer_value) => price * (1 - offer_value / 100);

export const applyMinus = (price, offer_value) => price - offer_value

export const applySlice = (price, slice_value, offer_value) => {
    const nb_of_slice = Math.floor(price / slice_value);
    const reduc = nb_of_slice * offer_value;
    return price - reduc;
}

export const returnLowestNumber = (arr_of_prices) => Math.min(...arr_of_prices)

const only_numbers = value => !isNaN(value);

export const SelectBestOffer = (price, obj_offers) => {
    const { offers: [percentage, minus, slice] } = obj_offers;
    const perc_offer = percentage && applyPercentage(price, percentage.value);
    const min_offer = minus && applyMinus(price, minus.value);
    const slice_offer = slice && applySlice(price, slice.sliceValue, slice.value);
    return returnLowestNumber([perc_offer, min_offer, slice_offer].filter(only_numbers));
}