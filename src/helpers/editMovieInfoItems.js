import {getTimeFromMinutes} from "@/helpers/getTimeFromMinutes";
import {nameMatching} from "@/helpers/nameMatching";

const editBudget = (budget) => {
    return budget?.value ? `${budget.value.toLocaleString()} ${budget.currency}` : '—';
}
const compoundItems = (value) => {
    if (Array.isArray(value)) {
        const compound = [];
        value.map((item) => compound.push(item.name))
        return compound;
    }
    return value;
}
export const editMovieInfoItems = (item = {}) => {
    const editedItem = [];
    switch (item.name){
        case 'budget':
            editedItem.push(editBudget(item.value))
            break;
        case 'movieLength':
            editedItem.push(getTimeFromMinutes(item.value))
            break;
        case 'type':
            editedItem.push(nameMatching(item.value))
            break;
        default:
            editedItem.push(compoundItems(item.value));
    }
    return editedItem.flat();
}
