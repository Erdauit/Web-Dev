import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from "../album";
import {AlbumService} from "../albums.service";
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: Album;
  loaded: boolean;
  newTitle: string;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.post = {} as Album;
    this.loaded = true;
    this.newTitle = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.loaded = false;
        this.albumService.getPost(id).subscribe((post) => {
          this.post = post;
          this.loaded = true;
        })
      }
    });
  }

  saveTitle() {
    this.albumService.updateAlbum(this.post.id, this.newTitle).subscribe((response) => {
        this.post.title = response.title;
        this.newTitle = "";
    })
  }

  back() {
    window.location.href = "http://localhost:4200/albums";
  }
}
