# To Do App

Complete and document this app so that users can create, complete, and delete tasks.

## Setup

To make this app work you first need to install yarn by running `npm i -g yarn`. Once yarn is installed, you can use the commands in the table below.

| Command | Effect |
|---|---|
| `yarn install` | Install the mode modules required to run the app. |
| `yarn dev` |  Launch the project and  automatically reload when things change. |
| `yarn start` | Launch the project without reloading. |
| `yarn lint` | Check the code for mistakes. |
| `yarn lint:fix` | Check and fix typo related mistakes. |

Once you have the project running, you need to connect to `localhost:3000/admin/init` from the browser to create the database.


## What You Need To Do

This is what you need to do to make this app work.

- Build an error handling function
- Add these paths to use the following renders


| Path | Method | Action |
| -- | -- | -- |
| `/item` | `POST` | Add `{ title: 'some task' }` to database and then redirect to home. |
| `/` | `GET` | Render `todolist` with `{ title: "To Do List", todo: items }`. `items` is the array of to do items. | 
| `/item/:id/delete` |  `GET` | Delete item using the `id`. Redirect to `/`.|
|`/item/:id/complete`|`GET`| Mark item complete using the `id`. Redirect to `/`.|
|`/item/:id/incomplete`|`GET`| Mark item incomplete using the `id`. Redirect to `/`.|

## Database Interface
The `/models/database` file contains the database interface. Here is the list of the methods and what they do.

| Method | Description |
| -- | -- |
| `createTask(title)` | Create a task with the given title. |
| `deleteTask(id)` | Delete the task with the given ID. |
| `getTask(id)` | Get the task with the given ID. |
| `getTasks()` | Get all the tasks in the database. |
| `updateTask(id, done)` | Update the task with the given id. 0 for incomplete. 1 for complete. |

Here are the models:
| Table | Fields |
| -- | -- |
| tasks | id(`int`), title(`text`), done(`int`) |