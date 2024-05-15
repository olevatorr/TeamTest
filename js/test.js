// 設置地圖的大小
const width = 800;
const height = 600;

// 創建 SVG 元素
const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// 定義投影
const projection = d3.geoMercator()
    .center([121, 24])
    .scale(6000)
    .translate([width / 2, height / 2]);

// 定義路徑生成器
const path = d3.geoPath()
    .projection(projection);

// 讀取 GeoJSON 數據
d3.json("../json/twcounty2010.2.json").then(function (data) {
    // 繪製縣市
    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#ccc")
        .attr("stroke", "#fff")
        .on("mouseover", function (event, d) {
            // 滑鼠移入時的互動效果
            d3.select(this).attr("fill", "orange");
        })
        .on("mouseout", function (event, d) {
            // 滑鼠移出時的互動效果
            d3.select(this).attr("fill", "#ccc");
        })
        .on("click", function (event, d) {
            // 點擊時的互動效果
            console.log(d.properties.county);
        });
});