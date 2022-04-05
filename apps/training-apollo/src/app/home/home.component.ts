import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { gql } from '@apollo/client';
import { Apollo } from 'apollo-angular';

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
  selector: 'nx-apollo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    console.log('home is ready');
  }

  getCachedData(): void {
    const data = this.apollo.client.readQuery({ query });
    console.log('clicked');
    console.log(data);
  }
}
