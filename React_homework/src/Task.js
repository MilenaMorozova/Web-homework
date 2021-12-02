import './Task.css';
import React from 'react';

function CreateTaskBlock({createTask}) {
  const [text, setText] = React.useState('');

  return <div>
      <input placeholder="Input task" onChange={(event) => {setText(event.target.value)}}/>
      <button className="CreateButton" onClick={() => createTask(text)}>CREATE</button>
    </div>
}

function DeleteTaskButton({action}) {
  return <button onClick={action} className="DeleteButton">DELETE</button>
}

function ChangeTaskButton({action, isChanging, setChanging}) {
  if (isChanging) {
    return <button className="SaveButton" onClick={() => {action(); setChanging(!isChanging)}}>SAVE</button>
  }
  return <button className="ChangeButton" onClick={() => setChanging(!isChanging)}>CHANGE</button>
}

function Task({text, deleteSelf, changeSelf}) {
  const [isChanging, setChanging] = React.useState(false);
  const [content, setContent] = React.useState(text);

  return (
    <div className="Task">
        {isChanging ? <input className="taskInput" value={content} onChange={(event) => {setContent(event.target.value)}}/> : <span>{text}</span>}
        <div className="Buttons">
          <ChangeTaskButton isChanging={isChanging} setChanging={setChanging} action={() => changeSelf(content)}/>
          <DeleteTaskButton action={deleteSelf}/>        
        </div>
    </div>
  )
}

export {Task, CreateTaskBlock};
