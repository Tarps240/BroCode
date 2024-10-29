// propTypes = A mechanisim that ensures that the passed value is of the correct datatype.
//             age: PropTypes.number

// defaultProps = Default values for props in case they are not passed from the parent component.
//                name: "Guest"

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student;