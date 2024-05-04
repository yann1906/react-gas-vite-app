import { useState, useEffect } from "react";

export const useFetchData = () => {
const [data, setData] = useState<any>(null); // State to hold fetched data
const [loading, setLoading] = useState(true);

useEffect(() => {
    // Simulate API call
    setTimeout(() => {
        // Mock data for the card
        const fakeData = {
            title: "Fake Title",
            description: "This is a fake description for the card.",
            imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
        };
        setData(fakeData);
        setLoading(false); // Set loading to false after fake API call
    }, 2000); // Simulating 2 seconds loading time
}, []);

  return { data, loading };
};
