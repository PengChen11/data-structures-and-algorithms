'use strict';

const Graph = require('./breadth-first.js');

test('testing', ()=>{

  const testGraph = new Graph();
  const vertexPandora= testGraph.addVertex('Pandora');
  const vertexArendelle = testGraph.addVertex('Arendelle');
  const vertexMetroville= testGraph.addVertex('Metroville');
  const vertexMonstroplolis= testGraph.addVertex('Monstroplolis');
  const vertexNarnia= testGraph.addVertex('Narnia');
  const vertexNaboo= testGraph.addVertex('Naboo');

  testGraph.addEdge(vertexPandora, vertexArendelle);
  testGraph.addEdge(vertexArendelle, vertexMetroville);
  testGraph.addEdge(vertexArendelle, vertexMonstroplolis);
  testGraph.addEdge(vertexMetroville, vertexMonstroplolis);
  testGraph.addEdge(vertexMetroville, vertexNarnia);
  testGraph.addEdge(vertexMetroville, vertexNaboo);
  testGraph.addEdge(vertexMonstroplolis, vertexNaboo);
  testGraph.addEdge(vertexNarnia, vertexNaboo);

  const result = testGraph.breadthFirst(vertexPandora);
  const toArr = [];
  result.forEach(vertex=>toArr.push(vertex.value));
  expect(toArr).toStrictEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstroplolis', 'Narnia', 'Naboo']);

});



