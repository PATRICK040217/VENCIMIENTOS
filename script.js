let itemsBase = [
   { name: "GALLETA DE AVENA  ABIERTA SIN BOLSA - V:1 DIA", vida: 24 },
  { name: " TOPPING FRESA - V: 5 DIAS ", vida: 120 },
  { name: " TOPPING MARACUYÁ -  V: 5 DIAS ", vida: 120 },
  { name: " TOPPING CHOCOLATE EN POMO - V:7 DIAS ", vida: 168 },
  { name: " TOPPING CHOCOLATE BOLSA ABIERTA - V: 30 DIAS ", vida: 720 },
  { name: " TOPPING CARAMELO EN POMO -  V:7 DIAS ", vida: 168 },
  { name: " TOPPING CHOCOLATE BOLSA ABIERTA - V:30 DIAS ", vida: 720 },
  { name: " TOPPING CARAMELO POMO -  V:7 DIAS ", vida: 168 },
  { name: " TOPPING CARAMELO BOLSA ABIERTA - V:60 DIAS", vida: 1440 },
  { name: " CONOS EN TAPER - V: 1 DIA", vida: 24 },
  { name: " CONOS CAJA ABIERTA - V:7 DIAS", vida: 168 },
  { name: " OREO EN TAPER - V:12 Hrs ", vida: 12 },
  { name: " OREO BOLSA ABIERTA - V:30 DIAS", vida: 720 },
  { name: " BASE DE HELADO EN LECHERA - V:1 DIA", vida: 24 },
  { name: " PAN N°4 EN BOLSA ABIERTA - V:1 DIA", vida: 24 },
  { name: " PAN BRIOCHE EN BOLSA ABIERTA - V:1 DIA ", vida: 24 },
  { name: " TORTILLA BIMBO EN BOLSA ABIERTA - V:3 DIAS", vida: 72 },
  { name: " SALSA OCOPA  BOLSA ABIERTA - V:7 DIAS ", vida: 168 },
  { name: " SALSA BBQ  BOLSA ABIERTA - V:3 DIAS", vida: 72 },
  { name: " SALSA ROCOTO  BOLSA ABIERTA - V:7 DIAS ", vida: 168 },
  { name: " MAYONESA  BOLSA ABIERTA - V:4 DIAS", vida: 96 },
  { name: " QUESO  BOLSA ABIERTA - V:7 DIAS", vida: 168 },
  { name: " SAL EN POMO - V:7 DIAS", vida: 168 },
  { name: " SAL BOLSA ABIERTA - V:30 DIAS", vida: 720 },
  { name: " PURÉ EN BOLSA ABIERTA -V:2 DIAS", vida: 48 },
  { name: " TOCINO BOLSA  ABIERTA -V:3 DIAS", vida: 72 },
  { name: " SALSA MELTZ  BOLSA ABIERTA - V:3 DIAS", vida: 72 },
  { name: " LECHUGA PICADA - V:12Hrs", vida: 12 },
  { name: " LECHUGA EN CABEZA - V:11 DIAS", vida: 264 },
  { name: " TOMATE PICADO -V:4Hrs", vida: 4 },
  { name: " TOMATE SANITIZADO -V:1 DIA", vida: 24 },
  { name: " TOMATE ENTERO - V:14 DIAS", vida: 336 },
  { name: " MARGARINA  LIQUIDA EN POMO ABIERTO - V:15 DIAS", vida: 360 },
  { name: " MARGARINA LIQUIDA EN DIP - V:12Hrs", vida: 12 },
  { name: " PICKLES EN DIP -V:2 DIAS", vida: 48 },
  { name: " PICKLES BOLSA ABIERTA - V:7 DIAS", vida: 168 },
  { name: " ENSALADA PREPARADA - V:1 DIA", vida: 24 },
  { name: " SALSA PURE BOLSA ABIERTA -V:4 DIAS", vida: 96 },
  { name: " SALSA HONEY MUSTARD BOLSA ABIERTA -V:3 DIAS", vida: 72 },
  { name: " PAPAS AL HILO BOLSA ABIERTA -V:2 DIAS", vida: 48 },
  { name: " PAPAS AL HILO MESA DE PREPARACION -V:8Hrs", vida: 8 },
  { name: " TORTILLA EN MITADES -V:12Hrs", vida: 12 },
  { name: " HARINA PREPARADA SIN CONTACTO CON POLLO - V:2 DIAS", vida: 48 },
  { name: " HARINA PREPARADA CONTACTO CON POLLO - V:1 DIA", vida: 24 },
  { name: "GALLETA SELLADA CON BOLSA - D:12Hrs V:2 DIAS", descongelamiento: 12, vida: 48 },
  { name: "3 LECHES VAINILLA - D:12H V:3 DIAS ", descongelamiento: 12, vida: 72 },
  { name: "3 LECHES CHOCOLATE - D:12H V:3 DIAS ", descongelamiento: 12, vida: 72 },
  { name: " MOUSSE LUCMA - D:12H V:2 DIAS ", descongelamiento: 12, vida: 48 },
  { name: " TORTA TRUFADA - D:12H V:2 DIAS ", descongelamiento: 12, vida: 48 },
  { name: " TOCINO BOLSA SELLADA - D:2 DIAS V:6 DIAS", descongelamiento: 48, vida: 144 },
  { name: " POP CORN CONGELADO MDO -D:4 DIAS V:2 DIAS", descongelamiento: 96, vida: 48 },
  { name: " FILETE KRUNCHY CONGELADO MDO-D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
  { name: " HOT WING CONGELADO MARINADO -D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
  { name: " POLLO PICANTE CONGELADO MARINADO -D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
  { name: " POLLO ETC CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
  { name: " POLLO RO CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
  { name: " CRISPY STRIP CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
  { name: " HOT WING CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
  { name: " FILETE ETC CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
  { name: " FILETE KRUNCHY CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
  { name: " TENDER CONGELADO CRUDO -D:4 DIAS V:3 DIAS ", descongelamiento: 96, vida: 72 },
  { name: " TENDER CONGELADO MARINADO -D:4 DIAS V:2 DIAS ", descongelamiento: 96, vida: 48 },
  { name: " POLLO RO MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial", Marinado: 2, vida: 46 },
  { name: " POLLO ETC MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " TENDER MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " HOTWING MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " NUGGET MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " STRIP MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " FILETE ETC MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " FILETE KRUNCHY MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " POP CORN MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " SALSA AJI DE LA CASA - V:3 DIAS ", vida: 72 },
  { name: " SALSA BBQ AHUMADA BOLSA ABIERTA - V:3 DIAS ", vida: 72 },
  { name: " SALSA AJI DE LA CASA ENVASADA - V:12Hrs ", vida: 12 },
  { name: " SALSA BBQ ENVASADA - V:12Hrs ", vida: 12 },
  { name: " POLLO PICANTE MARINADO- M:2 Hrs V:2 DIAS desde fecha inicial ", Marinado: 2, vida: 46 },
  { name: " TOCINO EN MITAD  PACKER - V:12Hrs ", vida: 12 },
  { name: " POLLO RO CRUDO - V:3 DIAS", vida: 72 },
  { name: " POLLO ETC CRUDO - V:3 DIAS ", vida: 72 },
  { name: " NUGGET CRUDO - V:3 DIAS ", vida: 72 },
  { name: " HOT WING CRUDO - V:3 DIAS ", vida: 72 },
  { name: " TENDER CRUDO - V:3 DIAS ", vida: 72 },
  { name: " FILETE ETC CRUDO - V:3 DIAS ", vida: 72 },
  { name: " POP CORN CRUDO - V:3 DIAS ", vida: 72 },
  { name: " FILETE KRUNCHY CRUDO - V:3 DIAS ", vida: 72 },
  { name: " PIE DE MANZANA - V:30 DIAS ", vida: 720 },
  { name: " HARVEST-DONACION  - V:11 DIAS", vida: 264 },
  { name: " SALSA TARTARA BOLSA ABIERTA - V:3 DIAS", vida: 72 },
  { name: " SALSA DE AJO BOLSA ABIERTA - V:3 DIAS", vida: 72 },
  { name: " TORTILLA CONGELADA -D:13Hrs V:1 DIA desde fecha inicial ", descongelamiento: 13, vida: 11 },
];
let items = JSON.parse(JSON.stringify(itemsBase));

const itemList = document.getElementById("itemList");
const searchInput = document.getElementById("searchInput");

// LOGIN
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const loginError = document.getElementById("loginError");

  if (user === "KFCADM" && pass === "KFCADM") {
    localStorage.setItem("role", "admin");
  } else if (user === "KFCUSER" && pass === "KFCUSER") {
    localStorage.setItem("role", "user");
  } else {
    loginError.textContent = "Usuario o contraseña incorrectos";
    return;
  }

  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("appScreen").style.display = "block";
  loadItems();

  if (localStorage.getItem("role") === "admin") {
    document.getElementById("adminPanel").style.display = "block";
    renderAdminTable();
  } else {
    document.getElementById("adminPanel").style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("role");
  document.getElementById("appScreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
}

// Cargar lista de ítems
function loadItems() {
  itemList.innerHTML = "";
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = JSON.stringify(item);
    option.textContent = item.name.trim();
    itemList.appendChild(option);
  });
}

function filterItems() {
  const filter = searchInput.value.toLowerCase();
  const options = itemList.options;
  for (let i = 0; i < options.length; i++) {
    const text = options[i].textContent.toLowerCase();
    options[i].style.display = text.includes(filter) ? "" : "none";
  }
}

function calculateExpiry() {
  const selectedOption = itemList.options[itemList.selectedIndex];
  if (!selectedOption) return;
  const item = JSON.parse(selectedOption.value);
  const fechaInicial = new Date(document.getElementById("dateInput").value);

  if (!fechaInicial) {
    document.getElementById("result").textContent = "Por favor, ingresa una fecha válida.";
    return;
  }

  let fechaVencimiento = new Date(fechaInicial);
  let vidaInicio = null;

  if (item.descongelamiento) {
    fechaVencimiento.setHours(fechaVencimiento.getHours() + item.descongelamiento);
    vidaInicio = new Date(fechaVencimiento);
    fechaVencimiento.setHours(fechaVencimiento.getHours() + item.vida);
  } else if (item.Marinado) {
    fechaVencimiento.setHours(fechaVencimiento.getHours() + item.Marinado);
    vidaInicio = new Date(fechaVencimiento);
    fechaVencimiento.setHours(fechaVencimiento.getHours() + item.vida);
  } else {
    vidaInicio = null;
    fechaVencimiento.setHours(fechaVencimiento.getHours() + item.vida);
  }

  document.getElementById("result").textContent =
    `Vencimiento: ${fechaVencimiento.toLocaleString("es-ES", { hour12: false })}`;
  renderSticker(item.name, fechaInicial, vidaInicio, fechaVencimiento);
}

function renderSticker(nombre, fechaP, fechaL, fechaV) {
  const dias = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
  const colores = ["black", "navy", "yellow", "red", "#804000", "green", "beige"];
  const dia = fechaP.getDay();

  document.getElementById("stickerHeader").textContent = dias[dia];
  document.getElementById("stickerHeader").style.backgroundColor = colores[dia];

  document.getElementById("pColumn").innerHTML = `P<br>${formatDateOnly(fechaP)}<br>H:<br>${formatHourOnly(fechaP)}`;
  document.getElementById("lColumn").innerHTML = fechaL
    ? `L<br>${formatDateOnly(fechaL)}<br>H:<br>${formatHourOnly(fechaL)}`
    : `L<br><br>H:<br>`;
  document.getElementById("vColumn").innerHTML = `V<br>${formatDateOnly(fechaV)}<br>H:<br>${formatHourOnly(fechaV)}`;

  const nombreCorto = nombre.split("-")[0].trim();
  document.getElementById("stickerProducto").textContent = nombreCorto;

  document.getElementById("sticker").style.display = "block";
}

function formatDateOnly(date) {
  return `${date.getDate().toString().padStart(2, '0')} / ${(date.getMonth() + 1).toString().padStart(2, '0')}`;
}
function formatHourOnly(date) {
  return `${date.getHours().toString().padStart(2, '0')} : ${date.getMinutes().toString().padStart(2, '0')}`;
}
function updateDayColor() {
  const dateValue = document.getElementById("dateInput").value;
  const dayColorBox = document.getElementById("dayColor");

  if (!dateValue) {
    dayColorBox.style.backgroundColor = "transparent";
    return;
  }
  const date = new Date(dateValue);
  const day = date.getDay();
  const dayColors = {
    0: "black", 1: "navy", 2: "yellow", 3: "red", 4: "#804000", 5: "green", 6: "beige"
  };
  dayColorBox.style.backgroundColor = dayColors[day];
}

// ADMIN PANEL
function renderAdminTable() {
  const table = document.getElementById("adminTable");
  table.innerHTML = `
    <tr>
      <th>Nombre</th><th>Marinado</th><th>Descongelamiento</th><th>Vida</th><th>Acción</th>
    </tr>`;
  items.forEach((item, index) => {
    table.innerHTML += `
      <tr>
        <td><input value="${item.name}" onchange="items[${index}].name=this.value"></td>
        <td><input type="number" value="${item.Marinado || ''}" onchange="items[${index}].Marinado=this.value?parseInt(this.value):undefined"></td>
        <td><input type="number" value="${item.descongelamiento || ''}" onchange="items[${index}].descongelamiento=this.value?parseInt(this.value):undefined"></td>
        <td><input type="number" value="${item.vida}" onchange="items[${index}].vida=parseInt(this.value)"></td>
        <td><button onclick="deleteItem(${index})">Eliminar</button></td>
      </tr>`;
  });
}

function addItem() {
  items.push({ name: "Nuevo Ítem", vida: 24 });
  renderAdminTable();
  loadItems();
}
function deleteItem(index) {
  items.splice(index, 1);
  renderAdminTable();
  loadItems();
}
function saveChanges() {
  alert("Cambios guardados correctamente ✅");
}
function resetItems() {
  items = JSON.parse(JSON.stringify(itemsBase));
  renderAdminTable();
  loadItems();
  alert("Se restableció la lista inicial 🔄");
}
