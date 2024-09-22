document.getElementById('bookshelfForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const roomLength = parseFloat(document.getElementById('roomLength').value);
    const roomHeight = parseFloat(document.getElementById('roomHeight').value);
    const shelfDepth = parseFloat(document.getElementById('shelfDepth').value);
    const numSections = parseInt(document.getElementById('numSections').value);
    const cabinetHeight = parseFloat(document.getElementById('cabinetHeight').value);

    // Calculate bookshelf dimensions
    const bookshelfLength = roomLength;
    const sectionWidth = bookshelfLength / numSections;
    const bookshelfHeight = roomHeight;
    const remainingHeight = roomHeight - cabinetHeight;

    // Display the calculated dimensions
    document.getElementById('bookshelfLength').textContent = bookshelfLength;
    document.getElementById('bookshelfHeight').textContent = bookshelfHeight;
    document.getElementById('outputNumSections').textContent = numSections;
    document.getElementById('sectionWidth').textContent = sectionWidth.toFixed(2);
    document.getElementById('outputShelfDepth').textContent = shelfDepth;
    document.getElementById('remainingHeight').textContent = remainingHeight.toFixed(2);

    // Show the result section
    document.getElementById('output').style.display = 'block';
});