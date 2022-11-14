import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  notes: Note = {};
  submitStatus: boolean = false;

  constructor(private note: NoteService) {}

  ngOnInit(): void {
    this.submitStatus = false;
  }
  panelOpenState = false;
  save() {
    this.note.addNote(this.notes).subscribe({
      next(value) {
        alert('Note Added');
      },
      error(e) {
        alert('Failed to add Note');
        console.log(e);
      },
    });
    this.submitStatus = true;
    //this.dash.getAll();
  }
  // success() {
  //    this._snackBar.open('Note added successfully', 'success', {
  //                  duration: 5000,
  //                  panelClass: ['mat-toolbar', 'mat-primary']
  //                  })

  // }

  canDeactivate() {
    if (!this.submitStatus)
      this.submitStatus = confirm(
        'You have not added a note, Are you sure you want to leave?'
      );
    return this.submitStatus;
  }
}

