var w = 1120,
    h = 1400,
    r = 400;

var width = 800,
    height = 100,
    dragbarw = 20;

var scaleWidth = 400,
    scaleHeight = 80;

var kookWidth = 420;

var drag = d3.behavior.drag()
    .origin(Object)
    .on("drag", dragmove);

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h)

var newg = svg.append("g")
      .data([{x: (w - width) / 2, y: (h - height) / 3}])

var baseg = svg.append("g")
      .data([{x: (w - width) / 2, y: (h - height)}])
      .attr('class', 'scale');

var dragbarleft = newg.append("rect")
      .attr("x", function(d) { return d.x - (dragbarw/2); })
      .attr("y", function(d) { return d.y + (dragbarw/2); })
      .attr("height", height - dragbarw)

var dragbarright = newg.append("rect")
      .attr("x", function(d) { return d.x + width - (dragbarw/2); })
      .attr("y", function(d) { return d.y + (dragbarw/2); });

var dragbartop = newg.append("rect")
      .attr("x", function(d) { return d.x + (dragbarw/2); })
      .attr("y", function(d) { return d.y - (dragbarw/2); });

var dragbarbottom = newg.append("rect")
      .attr("x", function(d) { return d.x + (dragbarw/2); })
      .attr("y", function(d) { return d.y + height - (dragbarw/2); });


function dragmove(d) {
    dragrect
        .attr("x", d.x = Math.max(0, Math.min(w - width, d3.event.x)))
    dragbarleft 
        .attr("x", function(d) { return d.x - (dragbarw/2); })
    dragbarright 
        .attr("x", function(d) { return d.x + width - (dragbarw/2); })
    dragbartop 
        .attr("x", function(d) { return d.x + (dragbarw/2); })
    dragbarbottom 
        .attr("x", function(d) { return d.x + (dragbarw/2); })
    dragrect
        .attr("y", d.y = Math.max(0, Math.min(h - height, d3.event.y)));
    dragbarleft 
        .attr("y", function(d) { return d.y + (dragbarw/2); });
    dragbarright 
        .attr("y", function(d) { return d.y + (dragbarw/2); });
    dragbartop 
        .attr("y", function(d) { return d.y - (dragbarw/2); });
    dragbarbottom 
        .attr("y", function(d) { return d.y + height - (dragbarw/2); });
}

var robPardeh = 15.3; 
var dastgahHeight = 150;
var baseHeight = 100;


// --------------------- SHUR ------------------------

var curHeight = 0 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 2 * robPardeh;
var interval2  = interval1 + 1 * robPardeh;
var interval3  = interval2 + 3 * robPardeh;
var interval4  = interval3 + 4 * robPardeh;
var interval5  = interval4 + 3 * robPardeh;
var interval6  = interval5 + 1 * robPardeh;
var interval7  = interval6 + 2 * robPardeh;
var interval8  = interval7 + 1 * robPardeh;
var interval9  = interval8 + 3 * robPardeh;
var interval10 = interval9 + 4 * robPardeh;


newg.append("image")
    .attr("x", (w - kookWidth) / 2 + 380)
    .attr("y", baseHeight + 0 * dastgahHeight - 50)
    .attr("height", 50)
    .attr("width", 50)
    .attr("z-index", -1)
    .attr("xlink:href", "shur.jpg")

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 50)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Shur")
 

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval8)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval9)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval10)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")


// --------------------- Segah ------------------------

var curHeight = 1 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 3 * robPardeh;
var interval2  = interval1 + 4 * robPardeh;
var interval3  = interval2 + 3 * robPardeh;
var interval4  = interval3 + 3 * robPardeh;
var interval5  = interval4 + 1 * robPardeh;
var interval6  = interval5 + 3 * robPardeh;
var interval7  = interval6 + 4 * robPardeh;
var interval8  = interval7 + 2 * robPardeh;
var interval9  = interval8 + 1 * robPardeh;
//var interval10 = interval9 + 2 * robPardeh;

newg.append("image")
    .attr("id", "active")
    .attr("x", (w - kookWidth) / 2 + 380)
    .attr("y", baseHeight + curHeight - 50)
    .attr("height", 50)
    .attr("width", 50)
    .attr("z-index", -1)
    .attr("xlink:href", "segah.jpg")

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 65)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Segaah")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval8)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval9)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

// --------------------- CHAHRGAAH ------------------------

var curHeight = 2 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 3 * robPardeh;
var interval2  = interval1 + 5 * robPardeh;
var interval3  = interval2 + 2 * robPardeh;
var interval4  = interval3 + 2 * robPardeh;
var interval5  = interval4 + 2 * robPardeh;
var interval6  = interval5 + 2 * robPardeh;
var interval7  = interval6 + 1 * robPardeh;
var interval8  = interval7 + 5 * robPardeh;
var interval9  = interval8 + 2 * robPardeh;
var interval10 = interval9 + 2 * robPardeh;

newg.append("image")
    .attr("id", "active")
    .attr("x", (w - kookWidth) / 2 + 380)
    .attr("y", baseHeight + curHeight - 50)
    .attr("height", 50)
    .attr("width", 50)
    .attr("z-index", -1)
    .attr("xlink:href", "chahargaah.jpg")

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 95)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Chaahargaah")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval8)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval9)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")


// --------------------- MAHUR ------------------------

var curHeight = 3 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 4 * robPardeh;
var interval2  = interval1 + 2 * robPardeh;
var interval3  = interval2 + 2 * robPardeh;
var interval4  = interval3 + 2 * robPardeh;
var interval5  = interval4 + 4 * robPardeh;
var interval6  = interval5 + 3 * robPardeh;
var interval7  = interval6 + 1 * robPardeh;
var interval8  = interval7 + 2 * robPardeh;
var interval9  = interval8 + 2 * robPardeh;
var interval10 = interval9 + 2 * robPardeh;

newg.append("image")
    .attr("id", "active")
    .attr("x", (w - kookWidth) / 2 + 380)
    .attr("y", baseHeight + curHeight - 50)
    .attr("height", 50)
    .attr("width", 50)
    .attr("z-index", -1)
    .attr("xlink:href", "maahur.jpg")

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 70)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Maahur")


baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval8)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval9)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval10)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")


// --------------------- HOMAYOUN ------------------------

var curHeight = 4 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 5 * robPardeh;
var interval2  = interval1 + 2 * robPardeh;
var interval3  = interval2 + 4 * robPardeh;
var interval4  = interval3 + 2 * robPardeh;
var interval5  = interval4 + 2 * robPardeh;
var interval6  = interval5 + 2 * robPardeh;
var interval7  = interval6 + 2 * robPardeh;
var interval8  = interval7 + 2 * robPardeh;
var interval9  = interval8 + 2 * robPardeh;
var interval10 = interval9 + 1 * robPardeh;

newg.append("image")
    .attr("id", "active")
    .attr("x", (w - kookWidth) / 2 + 380)
    .attr("y", baseHeight + curHeight - 50)
    .attr("height", 50)
    .attr("width", 50)
    .attr("z-index", -1)
    .attr("xlink:href", "homayoun.jpg")

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 90)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Homaayoun")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval8)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval9)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval10)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")


// --------------------- MAJOR ------------------------

var curHeight = 5 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 4 * robPardeh;
var interval2  = interval1 + 4 * robPardeh;
var interval3  = interval2 + 2 * robPardeh;
var interval4  = interval3 + 4 * robPardeh;
var interval5  = interval4 + 4 * robPardeh;
var interval6  = interval5 + 4 * robPardeh;
var interval7  = interval6 + 2 * robPardeh;

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 65)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Major")


baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

// --------------------- NATURAL MINOR ------------------------

var curHeight = 6 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 4 * robPardeh;
var interval2  = interval1 + 2 * robPardeh;
var interval3  = interval2 + 4 * robPardeh;
var interval4  = interval3 + 4 * robPardeh;
var interval5  = interval4 + 2 * robPardeh;
var interval6  = interval5 + 4 * robPardeh;
var interval7  = interval6 + 4 * robPardeh;

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 115)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Natural Minor")


baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

// --------------------- HORMANIC MINOR ------------------------

var curHeight = 7 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 4 * robPardeh;
var interval2  = interval1 + 2 * robPardeh;
var interval3  = interval2 + 4 * robPardeh;
var interval4  = interval3 + 4 * robPardeh;
var interval5  = interval4 + 2 * robPardeh;
var interval6  = interval5 + 4 * robPardeh;
var interval7  = interval6 + 2 * robPardeh;
var interval8  = interval7 + 2 * robPardeh;

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 130)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Hormanic Minor")


baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", (h - height) / 3 + curHeight)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval8)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

// --------------------- MELODIC MINOR ------------------------

var curHeight = 8 * dastgahHeight;
var interval0  = 0;
var interval1  = interval0 + 4 * robPardeh;
var interval2  = interval1 + 2 * robPardeh;
var interval3  = interval2 + 4 * robPardeh;
var interval4  = interval3 + 4 * robPardeh;
var interval5  = interval4 + 2 * robPardeh;
var interval6  = interval5 + 2 * robPardeh;
var interval7  = interval6 + 2 * robPardeh;
var interval8  = interval7 + 4 * robPardeh;
var interval9  = interval8 + 4 * robPardeh;

newg.append("text")
    .attr("x", (w - kookWidth) / 2 - 120)
    .attr("y", baseHeight + curHeight - 20)
    .attr("class", "textLabel")
    .text("Melodic Minor")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval0)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval1)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval2)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval3)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval4)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval5)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval6)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "green")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval7)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "lightblue")
      .attr("r", "5")

baseg.append("circle")
      .attr("cx", (w - kookWidth) / 2 + interval8)
      .attr("cy", baseHeight + curHeight)
      .attr("fill", "red")
      .attr("r", "5")

var dragrect = newg.append("image")
      .attr("id", "active")
      .attr("x", function(d) { return d.x; })
      .attr("y", function(d) { return d.y; })
      .attr("height", height)
      .attr("width", width)
      .attr("fill-opacity", .5)
      .attr("cursor", "move")
      .attr("xlink:href", "kookyaab.jpg")
      .call(drag);


