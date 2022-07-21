function addParty_1(event) {
    var table = document.getElementById("table");
    var row = table.insertRow();
    row.setAttribute("id", "rowConcert1");
    var cell_1 = row.insertCell();
    cell_1.style.width = "25%";
    cell_1.innerHTML = document.getElementById("location_concert_1").textContent;
    var cell_2 = row.insertCell();
    cell_2.style.width = "30%";
    cell_2.innerHTML = document.getElementById("name_concert_1").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = document.getElementById("place_concert_1").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = "NOV 25 / 9PM";
}

function deleteParty_1(event) {
    document.getElementById("rowConcert1").remove();
}

function addParty_2(event) {
    var table = document.getElementById("table");
    var row = table.insertRow();
    row.setAttribute("id", "rowConcert2");
    var cell_1 = row.insertCell();
    cell_1.style.width = "25%";
    cell_1.innerHTML = document.getElementById("location_concert_2").textContent;
    var cell_2 = row.insertCell();
    cell_2.style.width = "30%";
    cell_2.innerHTML = document.getElementById("name_concert_2").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = document.getElementById("place_concert_2").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = "DEC 15 / 11PM";
}

function deleteParty_2(event) {
    document.getElementById("rowConcert2").remove();
}

function addParty_3(event) {
    var table = document.getElementById("table");
    var row = table.insertRow();
    row.setAttribute("id", "rowConcert3");
    var cell_1 = row.insertCell();
    cell_1.style.width = "25%";
    cell_1.innerHTML = document.getElementById("location_concert_3").textContent;
    var cell_2 = row.insertCell();
    cell_2.style.width = "30%";
    cell_2.innerHTML = document.getElementById("name_concert_3").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = document.getElementById("place_concert_3").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = "OCT 18 / 17PM";
}

function deleteParty_3(event) {
    document.getElementById("rowConcert3").remove();
}

function addParty_4(event) {
    var table = document.getElementById("table");
    var row = table.insertRow();
    row.setAttribute("id", "rowConcert4");
    var cell_1 = row.insertCell();
    cell_1.style.width = "25%";
    cell_1.innerHTML = document.getElementById("location_concert_4").textContent;
    var cell_2 = row.insertCell();
    cell_2.style.width = "30%";
    cell_2.innerHTML = document.getElementById("name_concert_4").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = document.getElementById("place_concert_4").textContent;
    var cell_3 = row.insertCell();
    cell_3.style.width = "30%";
    cell_3.innerHTML = "JUL 15 / 12PM";
}

function deleteParty_4(event) {
    document.getElementById("rowConcert4").remove();
}