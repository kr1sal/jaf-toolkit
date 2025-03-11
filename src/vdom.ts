import { VNode } from './vnode';

export interface VDOM {
  tree: unknown;
  setInitialVNode(vNode: VNode): void;
}
