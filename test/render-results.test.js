import renderResults from '../src/render-results.js';

const test = QUnit.test;

QUnit.module('Render MisId');

test('renders', assert => {
    // arrange

    const product = { 
        id: 'usb-octopus',
        image: 'img/usb.gif',
        name: 'USB Octopus',
        selected: 0,
        displayed: 0, 
    };
 
    const expected = '<p><img src="../img/usb.gif"><span id="product"></span> was selected <span id="selected"></span> times and displayed <span id="displayed"></span> times with a <span id="percent"></span>% click-rate.</p>';

    // act
    const dom = renderResults(product);
    const html = dom.outerHTML;

    // assert
    assert.equal(html, expected);
});