import ChildComp1 from "./ChildComp1";
import ChildComp2 from "./ChildComp2";
import "./ParentComp.css"


function ParentComp(){

    return(
    <div className="ParentComp">
        
        <ChildComp1/>
        <ChildComp2/>

    </div>
    )
}

export default ParentComp;