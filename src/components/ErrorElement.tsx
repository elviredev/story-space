import { useRouteError } from "react-router-dom";

/**
 * Ce composant permet d'avoir un fallback si le composant crash
 * @returns 
 */
const ErrorElement = () => {
    const error = useRouteError()
    console.log(error);


    return (
        <div className="section">
            <h4>There was an error...</h4>
        </div>
    );
};

export default ErrorElement;