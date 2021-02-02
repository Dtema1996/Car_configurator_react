const testFacets = {
  data: {
    model: { id: 1, name: 'Facet 1', options: [{ val: 1, desc: 'Facet1Desc1' }, { val: 2, desc: 'Facet1Desc2' }, { val: 3, desc: 'Facet1Desc3', extraCost: 10000 }], selectedOption: 0 },
    package: { id: 1, name: 'Facet 1', options: [{ val: 1, desc: 'Facet1Desc1' }, { val: 2, desc: 'Facet1Desc2' }, { val: 3, desc: 'Facet1Desc3', extraCost: 100000 }], selectedOption: 0 },
    engine: { id: 1, name: 'Facet 1', options: [{ val: 1, desc: 'Facet1Desc1', extraCost: 4000 }, { val: 2, desc: 'Facet1Desc2' }, { val: 3, desc: 'Facet1Desc3', extraCost: 100 }], selectedOption: 0 },
    wheels: { id: 2, name: 'Facet 2', options: [{ val: 1, desc: 'Facet2Desc1' }, { val: 2, desc: 'Facet2Desc2', extraCost: 1500 }, { val: 3, desc: 'Facet2Desc3' }], selectedOption: 0 },
    colour: { id: 3, name: 'Facet 3', options: [{ val: 1, desc: 'Facet3Desc1' }, { val: 2, desc: 'Facet3Desc2' }, { val: 3, desc: 'Facet3Desc3' }], selectedOption: 0 },
  },
  selections: {
    model: null,
    package: null,
    engine: null,
    wheels: null,
    colour: null,
  },
};

export default testFacets;
