let container = "",
    tableContainer = "",
    rowOne = "",
    rowTwo = "",
    showEvents = "",
    createTableRow = "",
    createTableData = "";

document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.boxSizing = "border-box";

container = document.createElement("div");
container.style.width = "100%";
container.style.padding = "20px 0";
container.style.backgroundColor = "black";
container.style.color = "white";
container.style.overflow = "hidden";
document.body.appendChild(container);

tableContainer = document.createElement("table");
tableContainer.style.width = "90%";
tableContainer.style.margin = "0 auto";
tableContainer.style.padding = "10px 25px";
tableContainer.style.borderCollapse = "collapse";
container.appendChild(tableContainer);

function adding_row() {
    createTableRow = document.createElement("tr");
    createTableRow.style.backgroundColor = "grey";
    createTableRow.style.border = "5px solid black";
    tableContainer.appendChild(createTableRow);
    return createTableRow;
}

function adding_column(text_name, row, icon) {
    createTableData = document.createElement("td");
    createTableData.style.width = "30%";

    var column_div = document.createElement("div");
    column_div.style.width = "90%";
    column_div.style.borderRight = "1px solid black";
    column_div.style.margin = "0 auto";
    createTableData.appendChild(column_div);

    var column_flex = document.createElement("div");
    column_flex.style.display = "flex";
    column_div.appendChild(column_flex);

    var column_img = document.createElement("div");
    column_img.style.width = "25%";
    column_flex.appendChild(column_img);

    var img = document.createElement("img");
    img.src = icon;
    column_img.appendChild(img);

    var column_text = document.createElement("div");
    column_text.style.width = "50%";
    column_flex.appendChild(column_text);

    var content = document.createElement("span");
    content.innerText = text_name;
    console.log(content.innerHTML);
    column_text.appendChild(content);

    row.appendChild(createTableData);
}

function adding_column_btn(buy_sold, row) {
    var column_btn = document.createElement("td");
    column_btn.style.width = "10%";
    column_btn.style.cursor = "pointer";
    if (buy_sold == "SOLD OUT") {
        column_btn.style.backgroundColor = "#2c242475";
        column_btn.innerHTML = buy_sold;
    } else if (buy_sold == "BUY NOW") {
        column_btn.style.backgroundColor = "red";
        column_btn.innerHTML = buy_sold;
        column_btn.addEventListener("click", function() {
            buy_now(this);
        });
    }
    column_btn.style.padding = "10px";
    column_btn.style.textAlign = "center";
    row.appendChild(column_btn);
}
rowOne = adding_row();

adding_column("17 SEPTEMBER", rowOne, "/images/calendar.svg");
adding_column("MARTIN GARRIX", rowOne, "/images/mic-fill.svg");
adding_column("NEW ORLEANS,LA", rowOne, "/images/geo-alt-fill.svg");

adding_column_btn("BUY NOW", rowOne);

rowTwo = adding_row();
adding_column("17 SEPTEMBER", rowTwo, "/images/calendar.svg");
adding_column("MARTIN GARRIX", rowTwo, "/images/mic-fill.svg");
adding_column("NEW ORLEANS,LA", rowTwo, "/images/geo-alt-fill.svg");
adding_column_btn("SOLD OUT", rowTwo);

showEvents = document.createElement("div");
showEvents.style.width = "89%";
showEvents.style.cursor = "pointer";
showEvents.style.backgroundColor = "grey";
showEvents.style.margin = "0 auto";
showEvents.innerText = "Show All Events";
showEvents.style.textAlign = "center";
showEvents.style.padding = "10px 3px";
container.appendChild(showEvents);

showEvents.addEventListener("click", add_rows);

function buy_now(event) {
    var pElement = event.parentElement;

    var datas = pElement.querySelectorAll("span");

    var data = "";
    datas.forEach((element) => {
        data += element.innerHTML + "\n";
    });
    alert("Your Item has added in CART \n " + data);
}

function add_rows() {
    for (let i = 0; i < 4; i++) {
        rowTwo = adding_row();
        adding_column("16 SEPTEMBER", rowTwo, "/images/calendar.svg");
        adding_column("MARTIN ", rowTwo, "/images/mic-fill.svg");
        adding_column("NEW ,LA", rowTwo, "/images/geo-alt-fill.svg");

        if (i % 2 == 0) {
            adding_column_btn("SOLD OUT", rowTwo);
        } else {
            adding_column_btn("BUY NOW", rowTwo);
        }
    }
}