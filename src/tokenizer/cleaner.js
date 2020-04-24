export const cleaner = (text) => {
    return text.replace(/[\W]/g, ' ').replace(/\d/g, '').replace(/  +/g, ' ').toLowerCase();
};
