import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  notes: Note [] =[];
 
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getData(data:any) {
    this.notes = data;
  }
  getAll() {
    this.note.getNotes().subscribe(value=>this.notes = value)
  }
  dateConvert(date: string | undefined) {
    if (date != undefined)
    {
      let [dateStr, timeStr] = date.split('T');
      let time = timeStr.replace(':000Z',' ')
     // const [] = dateStr.split('-');
      //let newDate = new Date(+year, +month - 1, +day);
      return dateStr ;
    }
    return null;
  }
  isControl = false;
  id: number | undefined = 0;
  
  delete(id: number | undefined) {
    if (id) {
      this.note.deleteNote(id).subscribe(value => {
        this.getAll();
      })
    }
  }
}
