import { useState } from "react";

type AvatarType = {
    image: string;
    firstName: string;
    lastName: string;

}

function Avatar({ image, firstName, lastName }: AvatarType) {

    const [donutsCount, setDonutsCount] = useState(0);

    return <>
        <img src={image} alt={`${firstName} ${lastName}`} />
        <p>
            {`${firstName} ${lastName.toUpperCase()}`}
            <button type="button" onClick={() => setDonutsCount(donutsCount + 1)} > 🍩
            </button>
            {donutsCount}
        </p>

    </>

}

export default Avatar