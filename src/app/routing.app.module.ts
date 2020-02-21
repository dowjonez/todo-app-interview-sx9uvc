import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreload } from './app-preload';
import { TodoComponent } from './components/todos-component/todos.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/directions', pathMatch: 'full' },
  { path: 'directions', component: ReadmeComponent},
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'todo/:id',
    component: TodoItemComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  preloadingStrategy: CustomPreload
})

@NgModule({
  imports: [routing],
  providers: [CustomPreload],
  exports: [RouterModule],
})
export class AppRoutingModule {}