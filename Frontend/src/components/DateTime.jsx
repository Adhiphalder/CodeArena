import React, { useState, useEffect } from "react";

const DateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const t = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(t);
    }, []);

    const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <div className="text-gray-300 text-sm font-bold mb-2">
            {formattedDate}
        </div>
    );
};

export default DateTime;