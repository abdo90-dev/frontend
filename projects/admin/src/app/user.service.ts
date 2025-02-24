import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpForm } from 'projects/authentication/signUpForm';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "https://app-250220182315.azurewebsites.net/signup/users";
  constructor(private http:HttpClient) { }
  getAllUsers(role:string){
    return this.http.get<SignUpForm[]>(`${this.apiUrl}?role=${role}`);
  }
  deleteCard(title:string){
    return this.http.delete(`https://app-250220182315.azurewebsites.net/home/delete/${title}`)
  }
  updateCard(card:Card,file:File,section:string){
    const formData = new FormData();
    formData.append("section",section)
    formData.append("descrition",card.text)
    formData.append("title",card.title)
    formData.append("file",file)
    formData.append("id",card.id.toString())
    return this.http.put(`https://app-250220182315.azurewebsites.net/home/update`,formData)
  }
}
interface Card {
  title: string; 
  text:string;
  section:string;
  id:number;
}
