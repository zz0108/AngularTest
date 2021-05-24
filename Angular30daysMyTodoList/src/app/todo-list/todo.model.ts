export class Todo {
  private title = '';
  private completed = false;
  private editMode = false;
  constructor(title:string){
    this.title = title || '';
  }

  //get
  get done():boolean{
    return this.completed;
  }
  get editing():boolean{
    return this.editMode;
  }

  //set
  set editable(bl:boolean){
    this.editMode = bl;
  }

  getTitle():string{
    return this.title;
  }

  setTitle(title:string):void{
    this.title = title;
  }

  toggleCompletion():void{
    this.completed = !this.completed;
  }
  /**
  * 設定是否完成
  *
  * @param {boolean} completed
  * @memberof Todo
  */
  setCompleted(completed:boolean):void{
    this.completed = completed;
  }
}
