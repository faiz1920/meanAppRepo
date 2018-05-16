/*
@Author : Faiz Ansari
@Contact : faiz1920@live.in
@Date : 15 May 2018
@Description : Dynamic Component Loader used to load components to grids dynamically.
*/
import { Component, OnInit, ComponentFactoryResolver, ReflectiveInjector, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { DynamicTableComponent } from './../../components/dynamic-table/dynamic-table.component';
import { SlideMenuComponent } from '../../components/primeng/slide-menu/slide-menu.component';
import { BreadcrumbComponent } from '../../components/primeng/breadcrumb/breadcrumb.component';
import { MenubarComponent } from '../../components/primeng/menubar/menubar.component';

@Component({
  selector: 'dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.css'],
  entryComponents: [
    DynamicTableComponent, SlideMenuComponent, BreadcrumbComponent, MenubarComponent
  ]
})
export class DynamicComponentLoaderComponent implements OnInit {

  ngOnInit(): void {
  }

  currentComponent = null;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: { component: any, inputs: any }) {
    // console.log("Component Data :: "+JSON.stringify(data));
    if (!data) {
      return;
    }
    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => { return { provide: inputName, useValue: data.inputs[inputName] }; });
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);

    // We create the component using the factory and the injector
    let component = factory.create(injector);

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }

  constructor(public resolver: ComponentFactoryResolver) {

  }

}

