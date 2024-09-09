import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  console.log('render');
  const [projectStatus, setProjectStatus] = useState({
    currentActive:undefined,
    projects:[]
  });

  function onClickHandler(){
    setProjectStatus({
      ...projectStatus,
      currentActive:0
    });
  }

  const [projectData, setProjectData] = useState({
    name:'',
    description:'',
    dueDate:''
  }); 

  let content;

  if(projectStatus.currentActive === undefined){
    content = <NoProjectSelected onButtonClick={onClickHandler}/>;
  }else if(projectStatus.currentActive === 0){
    content = <NewProject projectData={projectData}/>;
  }

  return (
    <main className="h-screen pt-5 flex gap-10">
      <Sidebar onButtonClick={onClickHandler}></Sidebar>
      {content}
    </main>
  );
}

export default App;
