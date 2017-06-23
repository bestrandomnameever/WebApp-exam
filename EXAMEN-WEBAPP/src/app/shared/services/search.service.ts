import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {
    private searches = new Subject<string>();

    searchResults = this.searches
        .debounceTime(300)
        .distinctUntilChanged()

    search(searchTerm: string) {
        this.searches.next(searchTerm);
    }
}