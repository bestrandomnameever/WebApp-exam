import { Injectable } from '@angular/core';
import { DummyRepo } from 'app/DummyRepo';

@Injectable()
export class CategoriesService {
    categories: string[] = new DummyRepo().CATEGORIES;

    getAllCategories(from: number = 0, to: number = 100) {
        return Promise.resolve(this.categories.slice(from,to));
    }
}