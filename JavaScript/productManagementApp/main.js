var products = ['Iphone', 'Xiaomi', 'Oppo', 'Samsung', 'Nokia', 'Huawei'];
function displayProduct() {
    let str = '<tr><th>STT</th><th>Tên sản phẩm</th><th colspan="2"></th></tr>'
    for (let i = 0; i < products.length; i++) {
        str += '<tr>';
        str += `<td class='stt'>${i + 1}</td><td class='sp'>${products[i]}</td>
        <td class='edit'><button style="button" onclick="editProduct(${i})"</button>Edit</td>
        <td class='xsp'><button style="button" onclick="deleteProduct(${i})"</button>Delete</td>`;
        str += '</tr>';
    }
    document.querySelector('#table').innerHTML = str;
}
let addPr = 'Tên sản phẩm<input id="product" type="text"> <button type="button" onclick="addProduct()">Thêm</button>';
document.querySelector('#form').innerHTML = addPr;


function addProduct() {
    let product = document.querySelector('#product').value;
    products.push(product);
    displayProduct();
    alert(`Sản phẩm ${product} đã được thêm thành công!`);
}
function editProduct(num) {
    edit = prompt('Nhập tên muốn thay thế: ');
    let name = products[num];
    delete products[num];
    products[num]=edit;
    displayProduct();
    alert(`Sản phẩm ${name} đã được chỉnh sửa thành ${products[num]}`);
}
function deleteProduct(num) {
    let name = products[num];
    products.splice(num, 1)
    displayProduct();
    alert(`${name} đã được xóa`);
}
displayProduct();