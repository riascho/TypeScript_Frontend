/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';
confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

// demo purposes
import { v4 as uuidV4 } from 'uuid';
console.log(uuidV4());

// actual to-do-app stuff
import { Task } from './task';
// type casting (omits that it could be undefined!)
const taskList =
  (document.getElementById('task-list') as HTMLUListElement) || null;
const taskForm =
  (document.getElementById('new-task-form') as HTMLFormElement) || null;
const taskItem =
  (document.getElementById('new-task-title') as HTMLInputElement) || null;
// better use built-in generic typing (if function allows it!)
const taskList2 = document.querySelector<HTMLUListElement>('#task-list');
const taskForm2 = document.querySelector<HTMLFormElement>('#new-task-form');
const taskItem2 = document.querySelector<HTMLInputElement>('#new-task-title');

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault(); // prevents refresh
  if (taskItem?.value === undefined || taskItem?.value === null) {
    return;
  }
  const newTask = new Task(taskItem.value, false);
  console.log(newTask);

  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = newTask.id;
  checkbox.checked = newTask.completed;

  label.append(checkbox, newTask.title);
  item.append(label);
  taskList.append(item);

  taskItem.value = '';
});
