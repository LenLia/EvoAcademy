
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { addToDO, TodoInterface } from "./model/todo.model";

@State<TodoInterface>({
    name: 'ToDO',
    defaults: {
        todos: [],
    },
  })
  @Injectable()
  export class TodoState {

    @Selector()
    static getTodo(state: TodoInterface){
        return state.todos;
    }

    @Action(addToDO)
    addTodoNew(ctx: StateContext<TodoInterface>, action: addToDO){
        const state = ctx.getState();
        ctx.patchState({
            todos: [...state.todos, action.todo],
        })
    }


  }