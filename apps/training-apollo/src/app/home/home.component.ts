import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_TODOS as query } from '../gqlQueries/gqlQueries';

@Component({
  selector: 'nx-apollo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos!: any[];
  loading = true;
  error: any;
  displayData: any;

  constructor(private apollo: Apollo) {}
 
  ngOnInit() {
    this.apollo
      .watchQuery({
        query: query,
      })
      .valueChanges.subscribe((result: any) => {
        this.todos = result.data.allTodos;
        this.loading = result.loading;
      });
    this.apollo.client.cache
  }

  ngDoCheck(): void {
    console.log(this.displayData)
  }

  readDataFromCache() {
    this.displayData = this.apollo.client.readQuery({ query });
    console.log(this.displayData);
  }

  addDataToCache() {
    const myNewTodo = {
      id: '6',
      title: 'Start using Apollo Client.',
      status: 'power wafel',
    };

    this.apollo.client.writeQuery({
      query,
      data: {
        allTodos: [...this.todos, myNewTodo],
      },
    });
  }

  removeAllDataFromCache() {
    this.apollo.client.resetStore()
  }
}
