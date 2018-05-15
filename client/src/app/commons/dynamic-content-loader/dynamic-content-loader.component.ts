/*
@Author : Faiz Ansari
@Contact : faiz.ansari@progenbusiness.com
@Date : 18 March 2017
@Description : Dynamic Component Loader used to load components to grids dynamically.
*/
import { Component, OnInit, ComponentFactoryResolver, ReflectiveInjector, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { PrgVerticalBarChartComponent } from '../../prg-charts/prg-d3/prg-vertical-bar-chart/prg-vertical-bar-chart.component';
import { PrgPieChartComponent } from '../../prg-charts/prg-d3/prg-pie-chart/prg-pie-chart.component';
import { PrgPrimeTableComponent } from '../../prg-tables/prg-prime-table/prg-prime-table.component';
import { PrgDonutChartComponent } from '../../prg-charts/prg-d3/prg-donut-chart/prg-donut-chart.component';
import { PrgStdSearchComponent } from '../../prg-search/prg-std-search/prg-std-search.component';
import { PrgSolrDashboardComponent } from '../../prg-dashboards/prg-floating-dashboards/prg-solr-dashboard/prg-solr-dashboard.component';
import { PrgAdvSearchComponent } from '../../prg-search/prg-adv-search/prg-adv-search.component';
import { PrgHpKpi1Component } from '../../prg-custom-components/prg-hp-kpi1/prg-hp-kpi1.component';
import { PrgHpLeadLagShiftComponent } from '../../prg-custom-components/prg-hp-lead-lag-shift/prg-hp-lead-lag-shift.component';
import { PrgHpHorizontalBarChartComponent } from '../../prg-custom-components/prg-hp-horizontal-bar-chart/prg-hp-horizontal-bar-chart.component';
import { PrgSharedComponent } from '../prg-shared.component';
import { PrgChartMenuComponent } from '../../prg-menu/prg-chart-menu/prg-chart-menu.component';
import { PrgStandardCalendarComponent } from '../../prg-calendar/prg-standard-calendar/prg-standard-calendar.component';
import { PrgGlobalFiltersComponent } from '../../prg-filters/prg-global-filters/prg-global-filters.component';
import { PrgGlobalFiltersApiComponent } from '../../prg-filters/prg-global-filters-api/prg-global-filters-api.component';
import { PrgTableMenuComponent } from '../../prg-menu/prg-table-menu/prg-table-menu.component';
import { PrgSolrSearchDashComponent } from '../../prg-dashboards/prg-floating-dashboards/prg-solr-search-dash/prg-solr-search-dash.component';
import { PrgDynamicDashboard1Component } from '../../prg-dashboards/prg-dynamic-dashboards/prg-dynamic-dashboard1/prg-dynamic-dashboard1.component';
import { PrgFloatDashboard1Component } from '../../prg-dashboards/prg-floating-dashboards/prg-float-dashboard1/prg-float-dashboard1.component';
import { PrgPiwsDashboardComponent } from '../../prg-dashboards/prg-floating-dashboards/prg-piws-dashboard/prg-piws-dashboard.component';
import { PrgHpSubregProlineComponent } from '../../prg-custom-components/prg-hp-subreg-proline/prg-hp-subreg-proline.component';
import { PrgAreaChartComponent } from '../../prg-charts/prg-d3/prg-area-chart/prg-area-chart.component';
import { PrgBubbleChartComponent } from '../../prg-charts/prg-d3/prg-bubble-chart/prg-bubble-chart.component';
import { PrgSankeyChartComponent } from '../../prg-charts/prg-d3/prg-sankey-chart/prg-sankey-chart.component';
import { PrgDualAxisChartComponent } from '../../prg-charts/prg-d3/prg-dual-axis-chart/prg-dual-axis-chart.component';
import { PrgScatterChartComponent } from '../../prg-charts/prg-d3/prg-scatter-chart/prg-scatter-chart.component';
import { PrgStackedVerticalBarChartComponent } from '../../prg-charts/prg-d3/prg-stacked-vertical-bar-chart/prg-stacked-vertical-bar-chart.component';
import { PrgHorizontalBarChartComponent } from '../../prg-charts/prg-d3/prg-horizontal-bar-chart/prg-horizontal-bar-chart.component';
import { PrgLineChartComponent } from '../../prg-charts/prg-d3/prg-line-chart/prg-line-chart.component';
import { PrgAxcCircularProgressComponent } from '../../prg-custom-components/prg-axc-circular-progress/prg-axc-circular-progress.component';
import { PrgAxcHzBarComponent } from '../../prg-custom-components/prg-axc-hz-bar/prg-axc-hz-bar.component';
import { PrgAxcDimensionMixComponent } from '../../prg-custom-components/prg-axc-dimension-mix/prg-axc-dimension-mix.component';
import { PrgC3GaugeChartComponent } from '../../prg-charts/prg-c3/prg-c3-gauge-chart/prg-c3-gauge-chart.component';
import { PrgAxcStackedKpiComponent } from '../../prg-custom-components/prg-axc-stacked-kpi/prg-axc-stacked-kpi.component';
import { ScoreKpiComponent } from '../../prg-custom-components/score-kpi/score-kpi.component';
// tslint:disable-next-line:max-line-length
import { PrgDimenionMixProgressBarComponent } from '../../prg-custom-components/prg-dimenion-mix-progress-bar/prg-dimenion-mix-progress-bar.component';
import { PrgRiskTableComponent } from '../../prg-custom-components/prg-risk-table/prg-risk-table.component';
import { PrgBulletChartComponent } from '../../prg-charts/prg-d3/prg-bullet-chart/prg-bullet-chart.component';
import { PrgAxcHzSingleBarComponent } from '../../prg-custom-components/prg-axc-hz-single-bar/prg-axc-hz-single-bar.component';
import { PrgAxcCaseGridComponent } from '../../prg-custom-components/prg-axc-case-grid/prg-axc-case-grid.component';
import { PrgGroupedVerticalbarChartComponent } from '../../prg-charts/prg-d3/prg-grouped-vertical-bar-chart/prg-grouped-vertical-bar-chart.component';
import { PrgQuadrantScatterXyChartComponent } from '../../prg-charts/prg-d3/prg-quadrant-scatter-xy-chart/prg-quadrant-scatter-xy-chart.component';
import { PrgNeedleGaugeChartComponent } from '../../prg-charts/prg-d3/prg-needle-gauge-chart/prg-needle-gauge-chart.component';
import { PrgMultiTreeMapChartComponent } from '../../prg-charts/prg-d3/prg-multi-tree-map-chart/prg-multi-tree-map-chart.component';
import { PrgGroupedHzbarChartComponent } from '../../prg-charts/prg-d3/prg-grouped-hzbar-chart/prg-grouped-hzbar-chart.component';
import { PrgAxcKpiBoxWithChartComponent } from '../../prg-custom-components/prg-axc-kpi-box-with-chart/prg-axc-kpi-box-with-chart.component';

@Component({
  selector: 'prg-dynamic-content-loader',
  templateUrl: './prg-dynamic-content-loader.component.html',
  styleUrls: ['./prg-dynamic-content-loader.component.css'],
  entryComponents: [
    PrgSharedComponent,
    PrgPieChartComponent, PrgChartMenuComponent, PrgVerticalBarChartComponent,
    PrgDimenionMixProgressBarComponent, PrgRiskTableComponent,
    PrgStandardCalendarComponent, PrgGlobalFiltersComponent,
    PrgPrimeTableComponent, PrgGlobalFiltersApiComponent, PrgTableMenuComponent,
    PrgDonutChartComponent, PrgStdSearchComponent, PrgAdvSearchComponent,
    PrgSolrDashboardComponent, PrgDynamicDashboard1Component, PrgFloatDashboard1Component,
    PrgPiwsDashboardComponent, PrgSolrSearchDashComponent, PrgHpKpi1Component,
    PrgHpHorizontalBarChartComponent, PrgAxcDimensionMixComponent,
    PrgHpLeadLagShiftComponent, PrgHpSubregProlineComponent, PrgAreaChartComponent,
    PrgScatterChartComponent, PrgSankeyChartComponent, PrgBubbleChartComponent,
    PrgDualAxisChartComponent, PrgHorizontalBarChartComponent, PrgLineChartComponent,
    PrgStackedVerticalBarChartComponent, PrgAxcCircularProgressComponent,
    PrgAxcHzBarComponent, PrgC3GaugeChartComponent, PrgAxcStackedKpiComponent,
    ScoreKpiComponent, PrgBulletChartComponent, PrgAxcHzSingleBarComponent,
    PrgAxcCaseGridComponent, PrgGroupedVerticalbarChartComponent, PrgQuadrantScatterXyChartComponent,
    PrgNeedleGaugeChartComponent, PrgMultiTreeMapChartComponent, PrgGroupedHzbarChartComponent,
    PrgAxcKpiBoxWithChartComponent
  ]
})
export class PrgDynamicContentLoaderComponent implements OnInit {

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

