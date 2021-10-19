import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('/service_data.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoaded(true);
            });
    }, [])

    return { services, loaded };
}

export default useServices;

