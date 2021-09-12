import {Observable} from "rxjs";
import {Hero} from "../../domain/model/hero";

export default interface ApiHeroService {
  getHeroes(): Observable<Hero[]>;
  getHero(id: number): Observable<Hero>;
  updateHero(hero: Hero): Observable<any>;
  addHero(hero: Hero): Observable<Hero>;
  deleteHero(id: number): Observable<Hero>;
  searchHeroes(term: string): Observable<Hero[]>;

}
