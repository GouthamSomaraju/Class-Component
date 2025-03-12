// import MyComponent from "./comp1";

import SecondComp from "./comp2";

let FunComponent = () => {

    let num=7
    return(
        <div>
            
            <SecondComp n={num}></SecondComp>
        </div>
    )
}

export default FunComponent; // export the function FunComponent for other files to use it. This is called exporting the component.

// let FunComponent = () => {
//     let user='goutham'
//     return (

//         <div>
//             <MyComponent name={user}/>
//         </div>
//     )
// }
// export default FunComponent; // export the function FunComponent for other files to use it. This is called exporting the component.