import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import config from '../../config';



function Meta() {
    const location = useLocation();
    const coursePath = location.pathname;
    const courseName = coursePath.split('/')[2]?.split('-').join(' ');

    const [data, setData] = useState({});
    const heading = data.name?.split(' ').join('-');

    console.log(heading, "data");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${config.apiUrl}choosepath/${courseName}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [courseName]);

    return (
        <Helmet>


            {/* <!-- HTML Meta Tags --> */}
            <title>Farjax Institute of Technology</title>
            <meta name="description" content="The Farjax Institute of Technology is a training institute that provides training in various technology-related courses" />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content={data ? `https://www.farjaxit.com/course/${heading}` : `https://www.farjaxit.com/`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.name || 'Farjax Institute of Technology'} />
            <meta property="og:description" content={data.shortDetails || 'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />
            <meta property="og:image" content={data.banner || 'https://i.ibb.co/58bpGXx/Screenshot-2024-07-09-103035.png'} />

            {/* <!-- Twitter Meta Tags --> */}
            <meta property="twitter:domain" content="farjaxit.com" />
            <meta property="twitter:url" content={data ? `https://www.farjaxit.com/course/${heading}` : `https://www.farjaxit.com/`} />
            <meta name="twitter:title" content="Farjax Institute of Technology" />
            <meta name="twitter:description" content={data.shortDetails || 'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />
            <meta name="twitter:image" content={data.banner || 'https://i.ibb.co/58bpGXx/Screenshot-2024-07-09-103035.png'} />



            {/* <meta property="og:url" content={data ? `https://www.farjaxit.com/course/${heading}` : `https://www.farjaxit.com/`} />
            <meta property="og:image" content={data.banner || 'https://i.ibb.co/58bpGXx/Screenshot-2024-07-09-103035.png'} />
            <meta property="og:title" content={data.name || 'Farjax Institute of Technology'} />
            <meta property="og:description" content={data.shortDetails || 'The Farjax Institute of Technology is a training institute that provides training in various technology-related courses'} />
            <title>{data.name}</title> */}
        </Helmet>
    );
}

export default Meta;
