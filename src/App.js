import React, { Component } from 'react';
import Tree from 'react-d3-tree';


class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}

class Tree1 {
    constructor() {
        this.root = null;
    }

    buildTree(n) {
        this.root = this.help(1, n);
    }

    help(lo, hi) {
        if(lo > hi) return [];
        let mid = Math.floor((lo + hi) / 2);
        let root = new Node(mid);
        root.children.push(this.help(lo, mid - 1));
        root.children.push(this.help(mid + 1, hi));
        return root;
    }
}

class App extends Component {

    state = {
        myTreeData: [{}],
    }

    componentDidMount() {
        let tree = new Tree1();

        tree.buildTree(15);

        this.setState({
            myTreeData:[tree.root],
        });
    }

    render() {
        const {myTreeData} = this.state;
        return (

            <div id="treeWrapper" style={{width: '100em', height: '100em'}}>
                <h2>For demo purpose designed by Yunhan Ning</h2>
                <Tree data={myTreeData} orientation='vertical' initialDepth={0} translate={{x:700, y:100}}/>

            </div>
        );
    }
}

export default App;