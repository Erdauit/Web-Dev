import { Component, OnInit  } from '@angular/core';
import { Album } from "../album";
import { AlbumService } from "../albums.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Album[];
  newPost: Album;
  loaded: boolean;

  constructor(private albumService: AlbumService) {
    this.posts = [];
    this.newPost = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    // this.posts = POSTS;
    this.getPosts();
  }

  getPosts(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((posts) =>{
      this.posts = posts;
      this.loaded = true;
    })
  }

  addPost(){
    this.loaded = false;
    this.albumService.addPost(this.newPost).subscribe((post) => {
      // this.posts.push(post);
      this.posts.unshift(post);
      this.loaded = true;
      this.newPost = {} as Album;
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe((response : Album) => {
      this.posts = this.posts.filter(a => a.id != id);
    })
  }
}
