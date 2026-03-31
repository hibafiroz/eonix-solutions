function StudentCard(props) {
    return (
        <>
            <h2> Name:{props.name}</h2>
            <h4>Course:{props.course}</h4>
            <h4>Batch:{props.batch}</h4>
            <hr />
        </>
    )
}

export default StudentCard
