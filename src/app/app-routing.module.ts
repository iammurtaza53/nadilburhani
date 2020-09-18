import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/attendence',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'attendence',
    loadChildren: () => import('./attendence/attendence.module').then( m => m.AttendencePageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'archery',
    loadChildren: () => import('./archery/archery.module').then( m => m.ArcheryPageModule)
  },
  {
    path: 'football',
    loadChildren: () => import('./football/football.module').then( m => m.FootballPageModule)
  },
  {
    path: 'cricket',
    loadChildren: () => import('./cricket/cricket.module').then( m => m.CricketPageModule)
  },
  {
    path: 'horse-riding',
    loadChildren: () => import('./horse-riding/horse-riding.module').then( m => m.HorseRidingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
