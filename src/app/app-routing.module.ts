import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'posts', loadChildren: './pages/posts/posts.module#PostsPageModule' },
    { path: 'posts/:id', loadChildren: './pages/post/post.module#PostPageModule' },
    { path: 'posts', loadChildren: './posts/posts.module#PostsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
