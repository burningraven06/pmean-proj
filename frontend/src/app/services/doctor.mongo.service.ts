import { Injectable } from '@angular/core';
import { Doctor } from '../modelStructures/doctor';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginAuthService} from '../services/loginAuth.service';

@Injectable()
export class DoctorMongoService {

  constructor(
    private http: HttpClient,
    private loginAuthService: LoginAuthService
  ) { }

  private doctorsAPIURL = 'http://localhost:3000/api/mongo/doctors';
  private doctorsAPIPUBURL = 'http://localhost:3000/api/mongo/pub/doctors';

  private handleServerError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private jwt_value = this.loginAuthService.getToken;
  private JWTHttpHeaderOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token_value')
    })  
  };

  getDoctors(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.doctorsAPIPUBURL);
    // return this.http.get<Doctor[]>(this.doctorsAPIURL, this.JWTHttpHeaderOptions);
  }

  getDoctorByID(id: any): Observable<Doctor> {
    const getDoctorByIDURL = `${this.doctorsAPIPUBURL}/${id}`;
    return this.http.get<Doctor>(getDoctorByIDURL).pipe(catchError(this.handleServerError<Doctor>(`getDoctorByID: ${id}`)));
  }

  updateDoctorByID(doctorObj: any): Observable<Doctor> {
    const httpPUTOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const updateDoctorByIDURL = `${this.doctorsAPIPUBURL}/${doctorObj._id}`
    return this.http.patch(updateDoctorByIDURL, doctorObj, httpPUTOptions).pipe(catchError(this.handleServerError<any>(`updateDoctorByID: ${doctorObj.id}`)))
  }

  createDoctor(doctor: Doctor): Observable<Doctor> {
    const httpPOSTOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + localStorage.getItem("token_value") })
    }
    return this.http.post<Doctor>(this.doctorsAPIPUBURL, doctor, httpPOSTOptions ).pipe(catchError(this.handleServerError<any>('addDoctor')))
  }

  deleteDoctorByID(doctor: any){
    const httpDELOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const deleteDoctorByIDURL = `${this.doctorsAPIPUBURL}/${doctor._id}`;
    return this.http.delete(deleteDoctorByIDURL, httpDELOptions).pipe(catchError(this.handleServerError<any>('Delete Doctor')))
  }

  searchDoctorsByName(term: string): Observable<Doctor[]> {
    // if (!term.trim()) return of([]);

    return this.http.get<Doctor[]>(`${this.doctorsAPIPUBURL}/search/?name=${term}`).pipe(
      catchError(this.handleServerError<Doctor[]>('searchDoctors', []))
    );
  }

}
