import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostGalleryComponent } from './post-gallery/post-gallery.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: PostsComponent},  
  {path: 'albums/:id', component: PostDetailComponent},
  {path: "albums/:id/photos", component: PostGalleryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
