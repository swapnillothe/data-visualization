const numbers = [5, 6, 2, 4, 1, 3];

const main = function () {
    const container = d3.select("#chart-container");
    const svg = container
        .append("svg")
        .attr("width", 600)
        .attr("height", 600);

    svg
        .selectAll("circle")
        .data(numbers)
        .enter()
        .append("circle")
        .attr("r", n => n * 5)
        .attr("cx", (n,i)=> (i*60)+30)
        .attr("cy", 60)
        .attr("fill", (n,i) => `rgb(${255},${0},${i * 100})`);
};

window.onload = main;