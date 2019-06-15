// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Nome', 8],
  ['Marca', 2],
  ['Valor', 2],
  ['Categoria', 2]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Estatisticas:', 'width':550, 'height':400, is3D: true};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
        var data = google.visualization.arrayToDataTable([
        ["Element", "Densidade", { role: "style" } ],
        ["Nome", 8.94, "#b87333"],
        ["Marca", 10.49, "silver"],
        ["Valor", 19.30, "gold"],
        ["Categoria", 21.45, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Estatisticas",
        width: 550,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
      chart.draw(view, options);
    }

