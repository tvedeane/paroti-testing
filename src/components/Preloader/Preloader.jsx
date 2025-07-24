"use client";

import React, { useEffect, useState } from "react";


const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <div className={`preloader ${loading ? "" : "preloader-hidden"}`}>
            <div className='preloader__inner'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Preloader;
