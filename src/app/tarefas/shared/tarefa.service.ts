import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /* Ação 1 Listagem de tarefas */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /* Ação 2 Responsavel por cadastrar uma nova tarefa na aplicação */
  cadastrar(tarefa: Tarefa): void {

    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /* Ação 3 Utilitario para fazer buscas em listas */
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /* Ação 4 Metodo responsavel para atualizar as tarefas */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /* Ação 5 Metodo responsavel por remover tarefas */
  remover(id: number): void {

    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /* Ação 6 Metodo responsavel pela alterção de tarefa Concluida ou não */
  alterarStatus(id: number): void {

    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}