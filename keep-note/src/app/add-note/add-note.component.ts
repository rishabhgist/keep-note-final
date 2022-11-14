import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  notes: Note = {};
  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  save() {
    this.note.addNote(this.notes).subscribe({
      next(value) { alert("Note Added") },
      error(e) { alert("Failed to add Note"); console.log(e); },
    })
    //this.dash.getAll();
  }
  // success() {
  //    this._snackBar.open('Note added successfully', 'success', {​
  //                  duration: 5000,​
  //                  panelClass: ['mat-toolbar', 'mat-primary']​
  //                  })

  // }
}

