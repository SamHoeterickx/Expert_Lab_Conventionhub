export const useUpdateSearchParams = () => {
    const updateSearchParam = (
        currentParams: URLSearchParams,
        key: string,
        value: string | null
    ): URLSearchParams => {
        const newParams = new URLSearchParams(currentParams);
        if (value === null || value === undefined || value === '') {
            newParams.delete(key);
        } else {
            newParams.set(key, value);
        }
        return newParams;
    };

    return updateSearchParam
}