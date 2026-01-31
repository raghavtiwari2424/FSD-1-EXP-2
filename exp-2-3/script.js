const svg = document.getElementById("svgCanvas");
const colorPicker = document.getElementById("colorPicker");

let drawing = false;
let currentPath = null;
let paths = [];

svg.addEventListener("mousedown", (e) => {
    drawing = true;

    currentPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );

    currentPath.setAttribute("stroke", colorPicker.value);
    currentPath.setAttribute("stroke-width", "2");
    currentPath.setAttribute("fill", "none");

    const point = getPoint(e);
    currentPath.setAttribute("d", `M ${point.x} ${point.y}`);

    svg.appendChild(currentPath);
    paths.push(currentPath);
});

svg.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const point = getPoint(e);
    const d = currentPath.getAttribute("d");
    currentPath.setAttribute("d", d + ` L ${point.x} ${point.y}`);
});

svg.addEventListener("mouseup", () => {
    drawing = false;
});

function getPoint(event) {
    const rect = svg.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function undo() {
    if (paths.length > 0) {
        const last = paths.pop();
        svg.removeChild(last);
    }
}

