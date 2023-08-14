import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes} from './tarefas';

export const routes: Routes = [
      ...TarefaRoutes,
      {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
      }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
