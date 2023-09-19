// String to int with default value
export const stringToInt = (value?: string, def?: number): number => {
    const res = value ? parseInt(value) : def ?? 0;
    return isNaN(res) ? def ?? 0 : res;
};
