import { BookListModule } from './pages/book-list/book-list.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'book-list',
    loadChildren: () => import('./pages/book-list/book-list.module').then(m => m.BookListModule)
  },
  {
    path: 'book-detail/:title',
    loadChildren: () => import('./pages/book-detail/book-detail.module').then(m => m.BookDetailModule)
  },
  {
    path: 'add-book',
    loadChildren: () => import('./pages/add-book/add-book.module').then(m => m.AddBookModule)
  },
  {
    path: 'added-by-users',
    loadChildren: () => import('./pages/added-by-users/added-by-users.module').then(m => m.AddedByUsersModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found-routing.module').then(m => m.NotFoundRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
