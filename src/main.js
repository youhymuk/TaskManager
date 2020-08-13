import {createMenuTemplate} from "./components/menu";
import {createFilterTemplate} from "./components/filter";
import {createBoardTemplate} from "./components/board";
import {createEditCardTemplate} from "./components/task-edit";
import {createTaskCardTemplate} from "./components/task";
import {createLoadMoreButton} from "./components/load-more-button";

const TASKS_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.main__control`);
const mainElement = document.querySelector(`.main`);


render(headerElement, createMenuTemplate());
render(mainElement, createBoardTemplate());
render(mainElement, createFilterTemplate());

const boardElement = mainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createEditCardTemplate());

for (let i = 0; i < TASKS_COUNT; i++) {
  render(taskListElement, createTaskCardTemplate());
}

render(boardElement, createLoadMoreButton());
