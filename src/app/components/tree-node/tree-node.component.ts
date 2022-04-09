// Import the core angular services.
import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";

// Import the application components and services.
import { TreeNode } from "../tree/tree.component";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "my-tree-node",
	inputs: [ "node", "selectedNode" ],
	outputs: [ "selectEvents: select" ],
	host: {
		"[class.selected]": "( node === selectedNode )"
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: [ "./tree-node.component.SCSS" ],
	templateUrl:'./tree-node.component.html'

})
export class TreeNodeComponent {

	public node: TreeNode | null | undefined;
	public selectedNode: TreeNode | null;
	public selectEvents: EventEmitter<TreeNode | null>;

	constructor() {

		this.node = null;
		this.selectedNode = null;
		this.selectEvents = new EventEmitter();

	}

}
