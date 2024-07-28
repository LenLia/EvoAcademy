
export interface TodoInterface {
    todos: string[]
}

export class addToDO {
    static readonly type = '[Todo]: Todo Add';
    constructor(public todo: string) { }
}

export class removeTodo {
    static readonly type = '[Todo]: Todo Remove';
    constructor(public todo: string) { }
}

