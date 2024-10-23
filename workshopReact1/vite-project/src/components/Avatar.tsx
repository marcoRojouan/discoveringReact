type AvatarType = {
    image: string;
    firstName: string;
    lastName: string;
}

function Avatar({ image, firstName, lastName }: AvatarType) {
    return <section>
        <img src={image} alt={`${firstName} ${lastName}`} />
        <p>{`${firstName} ${lastName}`}</p>
    </section>

}

export default Avatar