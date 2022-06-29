import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'header-with-search',
  templateUrl: './header-with-search.component.html',
  styleUrls: ['./header-with-search.component.less']
})
export class HeaderWithSearchComponent implements OnInit {

  constructor(public shared: SharedService) { }

  ngOnInit(): void {
  }

  saveSearchResult(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();

    let target = ev.target;

    if (target) {
      let search = target.querySelector('#search');
      this.shared.searchFieldChanged.next(search.value);
    }
  }
}
