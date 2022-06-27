import { Component, OnInit } from '@angular/core';
import { Iposts } from './interfaces/posts';
import { Iusers } from './interfaces/users';
import { FeedService } from './services/feed.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  location: any;
  isNovo: any;

  constructor(private feedService: FeedService) {
    
   }
   posts: any;
   users: any;
   promise: any;
   photos: any;
   albun: any;
   comments: any;
   
  getAllUsers(){
    this.feedService.getAllUsers()
      .then(allusers => this.users= allusers)
      .catch(error =>console.log(error))
  }

  getUser(){
    this.feedService.getUser(2)
      .then(user => console.log(user))
      .catch(error => console.log(error))
  }


  getUserPosts(){
    this.feedService.getUserPosts(2)
      .then(posts => console.log(posts))
      .catch(error => console.log(error))
  }

  getUserAlbum(){
    this.feedService.getUserAlbum(5)
      .then(albun => this.albun= albun)
      .catch(error => console.log(error))
  }

  getPhotoAlbum(){
    this.feedService.getAlbumFoto(2)
      .then(photo => this.photos = photo)
      .catch(error => console.log(error))
  }

  getAllPosts(){
    this.feedService.getAllPosts()
      .then(allPost => this.posts = allPost)
      .catch(error => console.log(error))
  }

  getPosts(){
    this.feedService.getPosts(2)
      .then(post => console.log(post))
      .catch(error =>console.log(error))
  }

  getcomments(){
    this.feedService.getcomments(5)
      .then(coment => this.comments = coment)
      .catch(error => console.log(error))
  }


  updatePost(){
    const post: Iposts ={
      title: " ",
      body: " ",
      userId: '',
      id: ''
    }
    this.feedService.updatePost(post, 2)
      .then(post =>console.log(post))
      .catch(error => console.log(error))
  }

  deletePost(){
    this.feedService.deletePost(2)
    .then(res =>console.log(res))
    .catch(error => console.log(error))
  }
  
  save() : void {
    let promise;
    if (this.isNovo) {
        console.log('cadastrar');
        promise = this.feedService.CreatePost(this.posts);
    } else {
        console.log('alterar');
    };
}

  ngOnInit(): void {
  }

}


