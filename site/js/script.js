let webpage_mainmenu = [
    { menu: "Home Page", link: "index.html", class_name: "main_menu_item col-md-3"},
    { menu: "Hardware Booking", link: "hardware.html", class_name: "main_menu_item col-md-3"},
    { menu: "Latest Updates", link: "events.html", class_name: "main_menu_item col-md-3"},
    { menu: "Meet the Team", link: "team.html", class_name: "main_menu_item col-md-3"}
];

let WebpageTitle = "WebSite Title";

function webpage_load()
{
    let heading = document.getElementById("page_heading");
    let newHeading = document.createTextNode(WebpageTitle);
    heading.appendChild(newHeading);


    let menu_bar = document.getElementById("menu_container");
    for(let element of webpage_mainmenu){
            let content = document.createElement("div");
            let linka = document.createElement("a");
            let textd = document.createTextNode(element["menu"]);
            linka.appendChild(textd);
            linka.href = element["link"];
            content.appendChild(linka);
            content.setAttribute("class", element["class_name"]);

            menu_bar.appendChild(content);
    }
}