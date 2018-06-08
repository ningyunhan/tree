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

/*    componentDidMount() {
        let tree = new Tree1();

        tree.buildTree(15);

        this.setState({
            myTreeData:[tree.root],
        });
    }*/


    handleClick = () => {
        const value = this.input.value * 1;
        let reg = /^\d+$/;
        if(!reg.test(value)) {
            alert("A positive integer is required");
            this.input.value = '';
            return;
        }
        if(value === 0) {
            alert("A positive integer is required");
            this.input.value = '';
            return;
        }
        if(value > 100) {
            alert("Input number must be less than 100");
            this.input.value = '';
            return;
        }
        let tree = new Tree1();

        tree.buildTree(value);

        this.setState({
            myTreeData:[tree.root],
        });
        this.input.value = '';
    }

    render() {
        const {myTreeData} = this.state;
        return (

            <div id="treeWrapper" style={{width: '100em', height: '100em'}}>
                <h2>For demo purpose designed by Yunhan Ning</h2>
                Please input number of nodes:&nbsp;<input type="text" ref={input => this.input = input}/>&nbsp;
                <button onClick={this.handleClick}>Create</button>
                <Tree data={myTreeData} orientation='vertical' initialDepth={0} translate={{x:700, y:100}}/>

            </div>
        );
    }
}

export default App;