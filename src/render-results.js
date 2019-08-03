function renderResults(product) {
    const percent = ((product.selected / product.displayed) * 100);
    
    const p = document.createElement('p');
    const image = document.createElement('img');
    image.src = '../' + product.image;
    p.appendChild(image);
    const span = document.createElement('span');
    span.textContent = product.name + ' was selected ';
    p.appendChild(span);
    span.textContent = product.selected + ' times and was displayed ';
    p.appendChild(span);
    span.textContent = product.displayed + ' times, with a click-rate of ';
    p.appendChild(span);
    span.textContent = percent + ' %.';
    p.appendChild(span);

    return p;
}

export default renderResults;