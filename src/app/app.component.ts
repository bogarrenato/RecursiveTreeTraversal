import { Component } from '@angular/core';
import { TreeNode } from './components/tree/tree.component';

@Component({
  selector: 'app-root',
  styleUrls: [ "./app.component.scss" ],
	templateUrl:"./app.component.html"

})
export class AppComponent {

  public tree: TreeNode;
	public selectedTreeNode: TreeNode | null;


	constructor() {

		this.selectedTreeNode = null;
		this.tree = {
			label: "main",
			children: [
				{
					label: "node-a",
					children: [
						{
							label: "node-c",
							children: [
								{
									label: "node-d",
									children: [
										{
											label: "d-last",
											children: []
										}
									]
								},
                {
									label: "node-e",
									children: [
										{
											label: "e-last",
											children: []
										}
									]
								}
							]
						}
					]
				},
				{
					label: "node-b",
					children: [
						{
							label: "third",
							children: []
						}
					]
				}
			]
		};

	}

	public handleSelection( node: TreeNode ) : void {

		this.selectedTreeNode = node;

		console.group( "Selected Tree Node" );
		console.log( "Label:", node.label );
		console.log( "Children:", node.children.length );
		console.groupEnd();

	}
  
}
