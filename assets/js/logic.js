const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault();
    // "this" is <form>
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    // reset method clears the text from the input after submit
    items.push(item);
    populateList(items, itemsList);
    this.reset();
}

function populateList(plates = [], platesList) {
        platesList.innerHTML = plates.map((plate, i) => {
            return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="">${plate.text}</label>
            </li>`
            ;
        }).join('');
}

addItems.addEventListener('submit', addItem);