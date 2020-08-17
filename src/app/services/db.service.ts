import {Injectable, ViewChild, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  events = [];
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;
  componentsReferences = [];
  index: number = 0;

  constructor() { }
}
