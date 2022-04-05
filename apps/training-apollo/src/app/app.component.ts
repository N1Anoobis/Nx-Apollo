import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InMemoryCache } from '@apollo/client/cache/inmemory/inMemoryCache';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const query = gql`
  {
    allTodos {
      id
      title
      status
    }
  }
`;

@Component({
  selector: 'nx-apollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  todos!: any[];
  loading = true;
  error: any;
  cache!: InMemoryCache;
  reactiveVar: any;
  data: any;

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
    this.data = this.apollo.client.readQuery({ query });
  }

  readDataFromCache() {
    this.data = this.apollo.client.readQuery({ query });
    console.log(this.data);
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
        allTodos: [...this.data.allTodos, myNewTodo],
      },
    });
  }

  removeAllDataFromCache() {
    this.apollo.client.writeQuery({
      query,
      data: {
        allTodos: [],
      },
    });
  }
}
