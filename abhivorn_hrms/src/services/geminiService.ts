export const askHRPolicy = async (query: string): Promise<string> => {
    // Mock response for now
    console.log("Querying Gemini:", query);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`This is a simulated response for: "${query}". The actual Gemini integration will be connected here.`);
        }, 1000);
    });
};
