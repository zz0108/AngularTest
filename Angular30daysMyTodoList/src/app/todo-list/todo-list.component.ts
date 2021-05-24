import { TodoStatusType } from './todo-status-type';
import { Todo } from './todo.model';
import { TodoListService } from './todo-list.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService:TodoListService) { }
  //屬性
  todoStatusType = TodoStatusType;
  private status = TodoStatusType.All;


  ngOnInit(): void {
  }
  addTodo(inputRef : HTMLInputElement | any) : void{
    if(!inputRef){
      return;
    }
    const todo = inputRef.value.trim();
    if(todo){
      this.todoListService.add(todo);
      inputRef.value='';
    }
  }

  edit(todo:Todo):void{
    todo.editable = true;
  }

  update(todo:Todo,newTitle:string):void{
    if(!todo.editing){
      return;
    }
    const title = newTitle.trim();

    if(title){
      todo.setTitle(title);
      todo.editable = false;
    }else{
      const index = this.getList().indexOf(todo);
      if(index !== -1){
        this.remove(index);
      }
    }
  }

  cancelEditing(todo:Todo):void{
    todo.editable = false;
  }

  getList():Todo[] {
    let list : Todo[] = [];

    switch(this.status){
      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;
      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;
      default:
        list = this.todoListService.getList();
        break;
    }

    return list;
  }
  getRemainingList():Todo[]{
    return this.todoListService.getWithCompleted(false);
  }

  remove(index:number):void{
    this.todoListService.remove(index);
  }

  //加上取得已完成清單、設定狀態、檢查狀態的函式：

  /**
   * 取得已完成的待辦事項
   *
   * @returns {Todo[]}
   * @memberof TodoListComponent
   */

  getCompletedList():Todo[]{
    return this.todoListService.getWithCompleted(true);
  }

  /**
  * 設定狀態
  *
  * @param {number} status - 欲設定的狀態
  * @memberof TodoListComponent
  */
  setStatus(status:number):void{
    this.status = status;
  }

  /**
  * 檢查目前狀態
  *
  * @param {number} status - 欲檢查的狀態
  * @returns {boolean}
  * @memberof TodoListComponent
  */
  checkStatus(status:number):boolean{
    return this.status === status;
  }

  /**
  * 從清單中移除所有已完成之待辦事項
  *
  * @memberof TodoListComponent
  */

  removeCompleted():void{
    this.todoListService.removeCompleted();
  }

  /**
  * 取得所有的待辦事項清單（不受狀態影響）
  *
  * @returns {Todo[]}
  * @memberof TodoListComponent
  */
  getAllList():Todo[]{
    return this.todoListService.getList();
  }
  /**
  * 所有的代辦事項是否都已完成
  *
  * @returns {boolean}
  * @memberof TodoListComponent
  */
  allCompleted():boolean{
    return this.getAllList().length === this.getCompletedList().length;
  }
  /**
  * 設定所有的待辦事項已完成/未完成
  *
  * @param {boolean} completed - 已完成/未完成
  * @memberof TodoListComponent
  */
  setAllTo(completed:boolean):void{
    this.getAllList().forEach((todo) => {
      todo.setCompleted(completed);
    })
  }
}
