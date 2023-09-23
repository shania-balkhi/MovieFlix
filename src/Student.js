// using props in class based component 
// import React from "react";

// class Student extends React.Component {

//     render() {
//         console.log(this.props);
//         const {name,marks} = this.props;
//         return (
//            <>
//              <h1>Hello, {name}</h1>  
//              <p>You have secured {marks} %</p> 
//              <hr/>       
//            </>
//         )
//     }
// }


// using props in function component
function Student(props) {
    const {name, marks} = props
    return (
        <>
            <h1>Hello, {name}</h1>
            <p>You have secured {marks} %</p>
            <hr />
        </>
    )
}



export default Student;