import { Component, DoCheck, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_USERS, GET_ALL_TODOS } from '../gqlQueries/gqlQueries';

@Component({
  selector: 'nx-apollo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, DoCheck {
  todos: any[];
  loading = true;
  error: any;
  displayData: any;
  // query2: Query<OperationVariables, any>;
  displayData2: any;

  constructor(private apollo: Apollo) {}
 
  ngOnInit() {
 
    this.apollo
      .watchQuery({
        query: GET_ALL_TODOS,
      })
      .valueChanges.subscribe((result: any) => {
        this.todos = result.data.allTodos;
        this.loading = result.loading;
      });
  //   this.apollo.client.cache
  //   this.apollo
  //   .watchQuery({
  //     query: GET_ALL_USERS,
  //   })
  //   .valueChanges.subscribe((result: any) => {
  //     this.todos = result.data.allTodos;
  //     this.loading = result.loading;
  //   });
  }

  ngDoCheck(): void {
    console.log(this.todos);
    this.displayData = this.apollo.client.readQuery({query:GET_ALL_TODOS});
    console.log(this.displayData);
    // this.displayData2 = this.apollo.client.readQuery({query: GET_ALL_USERS });
    // console.log(this.displayData2);
  }

  readDataFromCache() {
    this.displayData = this.apollo.client.readQuery({ query: GET_ALL_TODOS});
    console.log(this.displayData);
  }

  addDataToCache() {
    const myNewTodo = {
      id: '6',
      title: 'Start using Apollo Client.',
      status: 'power wafel',
    };

// for (const iterator of ...this.todos) {
  console.log(this.todos)
// }




    this.apollo.client.writeQuery({
      query: GET_ALL_TODOS,
      data: {
        allTodos: [...this.todos, myNewTodo],
      },
    });
  }

  removeAllDataFromCache() {
    this.apollo.client.resetStore()
  }
}
