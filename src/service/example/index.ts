import axiosInstant from ".."

export const getApiExample = async () => {
    const data = await axiosInstant.get('/');
    return data;
}
