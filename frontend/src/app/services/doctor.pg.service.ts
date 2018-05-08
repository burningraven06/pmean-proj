import { Injectable } from '@angular/core';
import { Doctor } from '../modelStructures/doctor';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DoctorPGService {

  constructor(private http: HttpClient) { }

  private DoctoresAPIURL = 'http://localhost:3000/api/pg/doctors';

  private handleServerError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.DoctoresAPIURL).pipe(catchError(this.handleServerError('getDoctors', [])));
  }

  getDoctorByID(id: number): Observable<Doctor> {
    const getDoctorByIDURL = `${this.DoctoresAPIURL}/${id}`;
    return this.http.get<Doctor>(getDoctorByIDURL).pipe(catchError(this.handleServerError<Doctor>(`getDoctorByID: ${id}`)));
  }

  updateDoctorByID(DoctorObj: Doctor): Observable<Doctor> {
    const httpPUTOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const updateDoctorByIDURL = `${this.DoctoresAPIURL}/${DoctorObj.id}`
    return this.http.patch(updateDoctorByIDURL, DoctorObj, httpPUTOptions).pipe(catchError(this.handleServerError<any>(`updateDoctorByID: ${DoctorObj.id}`)))
  }

  createDoctor(Doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.DoctoresAPIURL, Doctor).pipe(catchError(this.handleServerError<any>('addDoctor')))
  }

  deleteDoctorByID(Doctor: Doctor): Observable<Doctor> {
    const deleteDoctorByIDURL = `${this.DoctoresAPIURL}/${Doctor.id}`;
    return this.http.delete<Doctor>(deleteDoctorByIDURL).pipe(catchError(this.handleServerError<Doctor>('Delete Doctor')))
  }

  searchDoctoresByName(term: string): Observable<Doctor[]> {
    // if (!term.trim()) return of([]);

    return this.http.get<Doctor[]>(`${this.DoctoresAPIURL}/search/?name=${term}`).pipe(
      catchError(this.handleServerError<Doctor[]>('searchDoctors', []))
    );
  }

}
