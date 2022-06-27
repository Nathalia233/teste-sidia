import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { Ialbuns } from '../interfaces/useralbuns';
import { Iposts } from '../interfaces/posts';
import { Iusers } from '../interfaces/users';
import { Ialbum } from '../interfaces/album';
import { IComents } from '../interfaces/coments';

@Injectable({
  providedIn: 'root'
})

export class FeedService {

  postsUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
    return this.httpClient.get<Iusers[]>(`${API_PATH}users`).toPromise();
  }

  getUser(id:number){
    return this.httpClient.get<Iusers>(`${API_PATH}users/${id}`).toPromise();
  }

  getUserPosts(id:number){
    return this.httpClient.get<Iposts>(`${API_PATH}posts/${id}`).toPromise();
  }

  getUserAlbum(id:number){
    return this.httpClient.get<Ialbuns>(`${API_PATH}albums/${id}`).toPromise();
  }

  getAlbumFoto(id:number){
    return this.httpClient.get<Ialbum>(`${API_PATH}albums/${id}/photos`).toPromise();

  }

  getAllPosts(){
    return this.httpClient.get<Iposts[]>(`${API_PATH}posts`).toPromise();
  }
   
  getPosts(id:number){
    return this.httpClient.get<Iposts[]>(`${API_PATH}posts/${id}`).toPromise();
  }

  getcomments(id:number){
    return this.httpClient.get<IComents[]>(`${API_PATH}posts/${id}/comments`).toPromise()
  }

  CreatePost(post: Iposts){
    return this.httpClient.post<Iposts>(`${API_PATH}posts`, post).toPromise();
  }

  updatePost(post:Iposts, id: number){
    return this.httpClient.put<Iposts>(`${API_PATH}posts/${id}`, post).toPromise();
  }

  deletePost(id:number){
    return this.httpClient.delete<Iposts>(`${API_PATH}posts/${id}`).toPromise();
  }

  criar(post: any){
    return this.httpClient.post(this.postsUrl,post).toPromise();
  }
}
