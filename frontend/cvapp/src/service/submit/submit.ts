import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment'



@Injectable({
  providedIn: 'root'
})
export class CVSubmitService {


  apiSubmitNewCVUrl = `${environment.baseUrl}/send/newcv`;
  apiGenerateNewCVUrl = `${environment.baseUrl}/generate/newcv`;
  apiFetchOldCVUrl = `${environment.baseUrl}/fetch/oldcv`;
  apiDeleteOldCVUrl = `${environment.baseUrl}/delete/oldcv`



  constructor(private http: HttpClient) { }

  submitCV(cvData: any): Observable<any> {
    return this.http.post(this.apiSubmitNewCVUrl, cvData);
  }

  generateCV(cvData: any): Observable<any> {
    return this.http.post(this.apiGenerateNewCVUrl, cvData);
  }

  fetchCV(){
    return this.http.get(this.apiFetchOldCVUrl)
  }

  deleteCV(index: any){
    return this.http.delete(`${this.apiDeleteOldCVUrl}/${index}`);
  }

  
}
