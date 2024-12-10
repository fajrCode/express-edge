export const login = async () => {
    const result = "login page";
    const foods = ["apple", "banana", "cherry"];

    const response = await fetch(" https://api.aviationstack.com/v1/flights");


    return {result, foods};
};