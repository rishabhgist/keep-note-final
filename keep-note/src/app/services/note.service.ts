import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  URL: string = "http://localhost:3000/notes"

  constructor(private http: HttpClient) { }
  
   getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.URL);
  }

  addNote(data:Note) {
    return this.http.post(this.URL, data)
  }

  deleteNote(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
  
}
