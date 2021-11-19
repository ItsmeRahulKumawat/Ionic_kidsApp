import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'chuchu',
    loadChildren: () => import('./chuchu/chuchu.module').then( m => m.ChuchuPageModule)
  },
  {
    path: 'abcd',
    loadChildren: () => import('./abcd/abcd.module').then( m => m.AbcdPageModule)
  },
  {
    path: 'number',
    loadChildren: () => import('./number/number.module').then( m => m.NumberPageModule)
  },
  {
    path: 'splash1',
    loadChildren: () => import('./splash1/splash1.module').then( m => m.Splash1PageModule)
  },
  {
    path: 'menu/:username',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'alphabet',
    loadChildren: () => import('./alphabet/alphabet.module').then( m => m.AlphabetPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('./shapes/shapes.module').then( m => m.ShapesPageModule)
  },
  {
    path: 'marks',
    loadChildren: () => import('./marks/marks.module').then( m => m.MarksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
