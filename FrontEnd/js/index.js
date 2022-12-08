const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let id = document.querySelector(".searchItem").value;
  let response = await axios.post(`http://localhost:8000/search/?id=${id}`);
  //   console.log(response, "this is reponse from backend");

  let btn = document.createElement("button");

  let recordDiv = document.querySelector(".search-records-box");
  recordDiv.innerHTML = "";
  if (response.status == 200) {
    recordDiv.style.display = "inline";

    let table = document.createElement("table");
    let titleBox = document.createElement("tr");
    let title1 = document.createElement("th");
    title1.innerText = "Name";
    let title2 = document.createElement("th");
    title2.innerText = "Major";
    let title3 = document.createElement("th");
    title3.innerText = "Address";
    titleBox.append(title1);
    titleBox.append(title2);
    titleBox.append(title3);
    table.append(titleBox);

    response.data.result.forEach((item) => {
      console.log(item.address.address_1);
      let box = document.createElement("tr");
      let name = document.createElement("td");
      name.innerText = `${item.Name}`;
      let major = document.createElement("td");
      major.innerText = `${item.Major}`;
      let address = document.createElement("td");
      address.innerText = `${item.address.address_1} ${item.address.address_2}, ${item.address.city}, ${item.address.state}, ${item.address.zip}`;
      box.append(name);
      box.append(major);
      box.append(address);
      table.append(box);
      recordDiv.appendChild(table);
    });
  }
  let data = response.data.result;
  btn.innerText = "Generate Pdf";
  btn.setAttribute("class", "pdfBtn");
  btn.addEventListener("click", async () => {
    console.log(data);
    let url = "http://localhost:8000/create-pdf";
    let res = await axios.post(url, data);
    if (res.status == 200) {
      window.location.href = `../Backend/${res.data.id}`;
    }
  });
  recordDiv.append(btn);
});
