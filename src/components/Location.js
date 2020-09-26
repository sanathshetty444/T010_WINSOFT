import React, { Component } from 'react'
import {Row,Container,Image,Col,InputGroup,Button,Form} from 'react-bootstrap'
// import { Formik, Field, Form } from "formik";



export class Location extends Component {

    constructor(){
        super()
        this.state={
            msg:"",
            key:"",
            answer:[]
        }
    }
    
    change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    click(e){
        e.preventDefault();
         
        // var str = document.getElementById("one").innerHTML; 
        let a = this.state.key.split(",")
        
        let b=this.state.key.split(`,`).map(x=>+x)
        console.log(b);
        var enemy = b;
        /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var code = (function () {
    function code() {
    }
    code.INF_$LI$ = function () { if (code.INF == null)
        code.INF = (1.0E7 | 0); return code.INF; };
    ;
    code.dis_$LI$ = function () { if (code.dis == null)
        code.dis = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([code.MAXN, code.MAXN]); return code.dis; };
    ;
    code.Next_$LI$ = function () { if (code.Next == null)
        code.Next = (function (dims) { var allocate = function (dims) { if (dims.length == 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i = 0; i < dims[0]; i++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([code.MAXN, code.MAXN]); return code.Next; };
    ;
    code.initialise = function (V, graph) {
        for (var i = 0; i < V; i++) {
            {
                for (var j = 0; j < V; j++) {
                    {
                        code.dis_$LI$()[i][j] = graph[i][j];
                        if (graph[i][j] === code.INF_$LI$())
                            code.Next_$LI$()[i][j] = -1;
                        else
                            code.Next_$LI$()[i][j] = j;
                    }
                    ;
                }
            }
            ;
        }
    };
    code.constructPath = function (u, v) {
        if (code.Next_$LI$()[u][v] === -1)
            return null;
        var path = ([]);
        /* add */ 
        (path.push(u) );
        while ((u !== v)) {
            {
                u = code.Next_$LI$()[u][v];
                /* add */ (path.push(u));
            }
        }
        ;
        return path;
    };
    code.floydWarshall = function (V, enemy) {
        var x;
        var set = ([]);
        for (var i = 0; i < enemy.length; i++) {
            {
                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                    s.push(e);
                    return true;
                }
                else {
                    return false;
                } })(set, enemy[i]);
            }
            ;
        }
        for (var k = 0; k < V; k++) {
            {
                for (var i = 0; i < V; i++) {
                    {
                        var count = 0;
                        for (var j = 0; j < V; j++) {
                            {
                                if ((set.indexOf((j)) >= 0)) {
                                    count++;
                                }
                                if (code.dis_$LI$()[i][k] === code.INF_$LI$() || code.dis_$LI$()[k][j] === code.INF_$LI$())
                                    continue;
                                if (code.dis_$LI$()[i][j] > code.dis_$LI$()[i][k] + code.dis_$LI$()[k][j]) {
                                    code.dis_$LI$()[i][j] = code.dis_$LI$()[i][k] + code.dis_$LI$()[k][j];
                                    code.Next_$LI$()[i][j] = code.Next_$LI$()[i][k];
                                }
                            }
                            ;
                        }
                    }
                    ;
                }
            }
            ;
        }
    };
    code.printPath = function (path) {
        var n = path.length;
        for (var i = 0; i < n - 1; i++) {
            console.info(String.fromCharCode((65 + path[i])) + " -> ");
        }
        console.info(String.fromCharCode((65 + path[n - 1])) + "\n");
    };
    code.main = function (args) {
        var V = 11;
        var graph = [[0, 1, 1, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [1, 0, code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [1, code.INF_$LI$(), 0, code.INF_$LI$(), 1, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [1, code.INF_$LI$(), code.INF_$LI$(), 0, code.INF_$LI$(), 1, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), 1, 1, code.INF_$LI$(), 0, code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), 1, 1, code.INF_$LI$(), 0, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), code.INF_$LI$(), 0, 1, code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), 1, 0, 1, 1, code.INF_$LI$()], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, 0, code.INF_$LI$(), 1], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, code.INF_$LI$(), 0, 1], [code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), code.INF_$LI$(), 1, 1, 0]];
        
        code.initialise(V, graph);
        code.floydWarshall(V, enemy);
        var path;
        var set = ([]);
        for (var i = 0; i < enemy.length; i++) {
            {
                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                    s.push(e);
                    return true;
                }
                else {
                    return false;
                } })(set, enemy[i]);
            }
            ;
        }
        var m = ({});
        for (var i = 0; i < V; i++) {
            {
                if (!(set.indexOf((i)) >= 0)) {
                    var sum = 0;
                    for (var j = 0; j < enemy.length; j++) {
                        {
                            sum += code.dis_$LI$()[i][enemy[j]];
                        }
                        ;
                    }
                    /* put */ (function (m, k, v) { if (m.entries == null)
                        m.entries = []; for (var i_1 = 0; i_1 < m.entries.length; i_1++)
                        if (m.entries[i_1].key.equals != null && m.entries[i_1].key.equals(k) || m.entries[i_1].key === k) {
                            m.entries[i_1].value = v;
                            return;
                        } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(m, i, sum);
                }
            }
            ;
        }
        var min = null;
        {
            var array18771 = (function (m) { if (m.entries == null)
                m.entries = []; return m.entries; })(m);
            for (var index18770 = 0; index18770 < array18771.length; index18770++) {
                var entry = array18771[index18770];
                {
                    if (min == null || min.getValue() > entry.getValue()) {
                        min = entry;
                    }
                }
            }
        }
        console.info("The suitable location to be fugitive is " + String.fromCharCode((65 + min.getKey())));
        var a = 65 + min.getKey();
        var s = String.fromCharCode(a);
        for (var i = 0; i < enemy.length; i++) {
            {
                var b = 65 + enemy[i];
                var d = String.fromCharCode(b);
                console.info("Shortest path from " + s + " to " + d + " ");
                path = code.constructPath(min.getKey(), enemy[i]);
                code.printPath(path);
            }
            ;
        }
        for (var i = 0; i < V; i++) {
            {
                for (var j = 0; j < V; j++) {
                    {
                    }
                    ;
                }
                console.info();
            }
            ;
        }
        console.info();
        for (var i = 0; i < V; i++) {
            {
                for (var j = 0; j < V; j++) {
                    {
                    }
                    ;
                }
                console.info();
            }
            ;
        }
    };
    return code;
}());
code.MAXN = 100;
code["__class"] = "code";
code.Next_$LI$();
code.dis_$LI$();
code.INF_$LI$();
code.main(null);

        
    }

    render() {
        return (
            <div>
                <Form>
  

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Key</Form.Label>
                    <Form.Control name='key' required value={this.state.key} onChange={this.change.bind(this)} type="text" placeholder="Enter key" />
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={this.click.bind(this)}>
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default Location