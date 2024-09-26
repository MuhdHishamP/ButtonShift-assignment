import { v4 as uuid } from "uuid";
import randomColor from "randomcolor";
const taskLimitNumber = 10;

export const columnsRawData = [
  {
    id: 1,
    name: "To-Do's",
    limit: taskLimitNumber,
    color: randomColor({ luminosity: "light" }),
    taskIds: [
      {
        id: uuid(),
        text: "Find more works from Upwork.",
        idColumn: 3,
        title: "Do freelance works",
      },
    ],
  },
  {
    id: 2,
    name: "In Progress",
    limit: taskLimitNumber,
    color: randomColor({ luminosity: "light" }),
    taskIds: [
      {
        id: uuid(),
        text: "Do more Django and Next.js projects.",
        idColumn: 3,
        title: "Create Applications using Next.js and Django",
      },
      {
        id: uuid(),
        text: "Listen to podcasts saved in Youtube's watch later section.",
        idColumn: 3,
        title: "Listen to Podcasts",
      },
    ],
  },
  {
    id: 3,
    name: "Completed",
    limit: taskLimitNumber,
    color: randomColor({ luminosity: "light" }),
    taskIds: [
      {
        id: uuid(),
        text: "Completed Frontend with temporary data saving into local storage.",
        idColumn: 3,
        title: "Completed ButtonShift assignment",
      },
    ],
  },
];
