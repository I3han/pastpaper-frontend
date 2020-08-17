import { Component, ViewChild, ComponentRef, ComponentFactoryResolver, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';

import { UserComponent } from '../user/user.component';
import {UsersService} from './users-chatbox.service';
import { DbService } from '../db.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  providers: [UsersService]
})
export class FirstPageComponent implements OnInit, OnDestroy {

  @ViewChild('viewContainerRef', { read: ViewContainerRef }) VCR: ViewContainerRef;

  index: number = 0;

  componentsReferences = [];

  constructor(private CFR: ComponentFactoryResolver, private userService: UsersService, private dbService: DbService) {
  }

  ngOnInit(){
    this.VCR = this.dbService.VCR;
    this.componentsReferences = this.dbService.componentsReferences ;
    this.index = this.dbService.index;
  }

  onSubmit(f: NgForm){
    const formData = f.value;
    //  console.log(this.formData.name);
    this.userService.setUser( formData.name, formData.email, formData.des, formData.gen);
    // console.log(this.userService.name);

    let componentFactory = this.CFR.resolveComponentFactory(UserComponent);
    let componentRef: ComponentRef<UserComponent> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    // prividing parent Component reference to get access to parent class methods
    currentComponent.compInteraction = this;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
    // console.log(this.componentsReferences.indexOf(componentRef));
  }

  createComponent() {

  }

  remove(index: number) {

    if (this.VCR.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: UserComponent = <UserComponent>componentRef.instance;

    let vcrIndex: number = this.componentsReferences.indexOf(componentRef)

    // removing component from container
    // console.log(componentRef);
    this.VCR.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

  ngOnDestroy(): void{
    this.dbService.VCR = this.VCR;
    this.dbService.componentsReferences = [...this.componentsReferences];
    this.dbService.index = this.index;
  }
}
