'use strict';
const Graph = require('../breadth-first-graph/breadth-first.js');
const getEdges = require('./get-edges.js');

const testGraph = new Graph();

const vertexPandora= testGraph.addVertex('Pandora');
const vertexArendelle = testGraph.addVertex('Arendelle');
const vertexMetroville= testGraph.addVertex('Metroville');
const vertexMonstroplolis= testGraph.addVertex('Monstroplolis');
const vertexNarnia= testGraph.addVertex('Narnia');
const vertexNaboo= testGraph.addVertex('Naboo');

testGraph.addEdge(vertexPandora, vertexArendelle, 150);
testGraph.addEdge(vertexPandora, vertexMetroville, 82);
testGraph.addEdge(vertexArendelle, vertexMetroville, 99);
testGraph.addEdge(vertexArendelle, vertexMonstroplolis, 42);
testGraph.addEdge(vertexMetroville, vertexMonstroplolis, 105);
testGraph.addEdge(vertexMetroville, vertexNarnia, 37);
testGraph.addEdge(vertexMetroville, vertexNaboo, 26);
testGraph.addEdge(vertexMonstroplolis, vertexNaboo, 73);
testGraph.addEdge(vertexNarnia, vertexNaboo, 250);

test('testing for unknown city name', ()=>{

  const result = getEdges(['badName', 'Pandora'], testGraph);
  expect(result).toStrictEqual([false, '$0']);

});

test('testing for good routes', ()=>{

  const result = getEdges(['Metroville', 'Pandora'], testGraph);
  expect(result).toStrictEqual([true, '$82']);

});

test('testing for good routes 2', ()=>{

  const result = getEdges(['Arendelle', 'Monstroplolis', 'Naboo'], testGraph);
  expect(result).toStrictEqual([true, '$115']);

});

test('testing for bad route', ()=>{

  const result = getEdges(['Naboo', 'Pandora'], testGraph);
  expect(result).toStrictEqual([false, '$0']);

});

test('testing for bad route2', ()=>{

  const result = getEdges(['Narnia', 'Arendelle', 'Naboo'], testGraph);
  expect(result).toStrictEqual([false, '$0']);

});
