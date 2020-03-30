let webpage_mainmenu = [
	{ menu: "Home Page", link: "index.html", class_name: "main_menu_item"},
	{ menu: "Hardware Booking", link: "hardware.html", class_name: "main_menu_item"},
	{ menu: "Upcoming Events", link: "events.html", class_name: "main_menu_item"},
	{ menu: "Visit the Team", link: "team.html", class_name: "main_menu_item"},
];

let WebpageTitle = "WebSite Title";

function webpage_load()
{
	let heading = document.getElementById("page_heading");
	let newHeading = document.createTextNode(WebpageTitle);
	heading.appendChild(newHeading);
	let table = document.getElementById("header_table");

	let menu_row = table.insertRow();
	for(let element of webpage_mainmenu){
		let tdata = document.createElement("td");
		let content = document.createElement("div");
		let linka = document.createElement("a");
		let textd = document.createTextNode(element["menu"]);
		linka.appendChild(textd);
		linka.href = element["link"];
		content.appendChild(linka);
		content.setAttribute("class", element["class_name"]);

		tdata.appendChild(content);
		menu_row.appendChild(tdata);
	}
}