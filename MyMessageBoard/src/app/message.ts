
export class Message {
  constructor(name:string,content:string){
    this.name = name;
    this.content = content;
    this.date = new Date();
  }

  name:string;
  content:string;
  date:Date;

}
