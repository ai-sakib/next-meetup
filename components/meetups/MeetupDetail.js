const MeetupDetail = props => {
    return (
        <section>
            <picture>
                <img src={props.image} alt={props.title} />
            </picture>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}

export default MeetupDetail
