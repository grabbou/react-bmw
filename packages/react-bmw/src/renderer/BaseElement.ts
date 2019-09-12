import * as ComponentRegistry from "./ComponentRegistry";
import uuid from "uuid";

export default abstract class BaseElement<T> {
  id: number = ComponentRegistry.register(this);
  name: string = uuid.v4();

  children = [];
  props: T;

  constructor(props: T) {
    this.props = props;
  }

  // Add a child to the end of existing list of children
  appendChild(child: any) {
    this.children.push(child);
    this.invalidate();
  }

  // Remove a child from the list of children
  removeChild(child: any) {
    this.children = this.children.filter(c => c !== child);
    this.invalidate();
  }

  // Insert a child before another child in the list of children
  insertBefore(child: any, childBefore: any) {
    this.children.splice(this.children.indexOf(childBefore), 0, child);
    this.invalidate();
  }

  // This method will be called multiple times for each children
  // To avoid unnecessary redraws, we batch updates with requestAnimationFrame
  invalidate() {}

  update: any;
}
