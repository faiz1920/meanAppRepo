import { Component, OnInit, ViewChild } from '@angular/core';
// import { TreeDragDropService, Message, TreeNode, MenuItem } from '../../common/api';
// import { Tree } from '../tree/tree';
// import { NodeService } from '../../../services/nodeservice';
// import { NodeService } from '../../service/nodeservice';
// import { Message, MenuItem, TreeNode } from '../../../components/common/api';
// import { Tree } from '../../../components/tree/tree';
// import { TreeDragDropService } from '../../../components/common/api';


import { TreeNode } from 'primeng/api';
import { JsonDataService } from '../../../services/json-data.service';

@Component({
  selector: 'app-data-tree',
  templateUrl: './data-tree.component.html',
  styleUrls: ['./data-tree.component.css'],
})
export class DataTreeComponent implements OnInit {


  filesTree0: TreeNode[];
  constructor(private _dataService: JsonDataService) { }

  ngOnInit() {
    this._dataService.getFiles().then(files => { console.log(JSON.stringify(files)); this.filesTree0 = files["data"] });
  }

}