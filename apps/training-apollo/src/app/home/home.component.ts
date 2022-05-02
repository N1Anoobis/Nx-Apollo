import { Component, DoCheck, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_TODOS } from '../gqlQueries/gqlQueries';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'nx-apollo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  todos: any[];
  loading = true;
  error: any;
  displayData: any;
  // query2: Query<OperationVariables, any>;
  displayData2: any;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  constructor(private apollo: Apollo, private _liveAnnouncer: LiveAnnouncer) {}

  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
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
    this.displayData = this.apollo.client.readQuery({ query: GET_ALL_TODOS });
    console.log(this.displayData);
    // this.displayData2 = this.apollo.client.readQuery({query: GET_ALL_USERS });
    // console.log(this.displayData2);
  }

  readDataFromCache() {
    this.displayData = this.apollo.client.readQuery({ query: GET_ALL_TODOS });
    console.log(this.displayData);
  }

  addDataToCache() {
    const myNewTodo = {
      id: '6',
      title: 'Start using Apollo Client.',
      status: 'power wafel',
    };

    console.log(this.todos);
  
    this.apollo.client.writeQuery({
      query: GET_ALL_TODOS,
      data: {
        allTodos: [...this.todos, myNewTodo],
      },
    });
  }

  removeAllDataFromCache() {
    this.apollo.client.resetStore();
  }
}
