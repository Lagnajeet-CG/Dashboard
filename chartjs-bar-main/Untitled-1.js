//how to make multichart csv data visualisation using javascript?   
<script src="https://www.gstatic.com/charts/loader.js"></script>


google.charts.load('current', {
  packages: ['controls']
}).then(function () {

   // place chart code here

});


  // gather data for last three days (including today)
  var chartData = null;
  var requests = [];
  var dateEnd = new Date();
  var dateRequest = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate() - 2);
  while (dateRequest.getTime() <= dateEnd.getTime()) {
    var oggidata = dateRequest.toJSON().slice(0,10).replace(/-/g,'-');
    requests.push(makeRequest(oggidata));
    dateRequest = new Date(dateRequest.getFullYear(), dateRequest.getMonth(), dateRequest.getDate() + 1);
  }


  // wait for all requests to finish
  $.when.apply($, requests).done(function () {
    // create, sort data table by date / time
    var data = new google.visualization.arrayToDataTable(chartData);
    data.sort([{column: 0}]);

    // draw chart
    var pi_temp = new google.visualization.ChartWrapper({
       chartType: 'LineChart',
       containerId: 'pi_temp',
       dataTable: data,
       options:{
          lineWidth: 1,
          width: 1000, height: 500,
          title: 'Today: fumarola1-' + oggidata + '.csv',
          hAxis: {title: 'Hour', format: 'MM/dd hh:mm:ss'},
          vAxis: {title: 'Temp (Celsius)'},
          series: { 0: {visibleInLegend: false}},
          trendlines: { 0: {} },
       }
    });
    pi_temp.draw();
  });


  // make csv request, return promise
  function makeRequest(oggidata) {
    return $.get("temp/fumarola1-" + oggidata + ".csv", function(csvString) {
      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
      arrayData = arrayData.map(function (row, index) {
        if (index === 0) {
          // return column headings
          return row;
        } else {
          // convert time string to date
          return [new Date(oggidata + 'T' + row[0]), row[1]];
        }
      });

      // combine data
      if (chartData === null) {
        chartData = arrayData;
      } else {
        // remove column headings, add remaining rows
        arrayData.splice(0, 1);
        chartData = chartData.concat(arrayData);
      }
    });
  }


google.charts.load('current', {
  packages: ['controls']
}).then(function () {
  // gather data for last three days (including today)
  var chartData = null;
  var requests = [];
  var dateEnd = new Date();
  var dateRequest = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate() - 2);
  while (dateRequest.getTime() <= dateEnd.getTime()) {
    var oggidata = dateRequest.toJSON().slice(0,10).replace(/-/g,'-');
    requests.push(makeRequest(oggidata));
    dateRequest = new Date(dateRequest.getFullYear(), dateRequest.getMonth(), dateRequest.getDate() + 1);
  }

  // wait for all requests to finish
  $.when.apply($, requests).done(function () {
    // create, sort data table by date / time
    var data = new google.visualization.arrayToDataTable(chartData);
    data.sort([{column: 0}]);

    // draw chart
    var pi_temp = new google.visualization.ChartWrapper({
       chartType: 'LineChart',
       containerId: 'pi_temp',
       dataTable: data,
       options:{
          lineWidth: 1,
          width: 1000, height: 500,
          title: 'Today: fumarola1-' + oggidata + '.csv',
          hAxis: {title: 'Hour', format: 'MM/dd hh:mm:ss'},
          vAxis: {title: 'Temp (Celsius)'},
          series: { 0: {visibleInLegend: false}},
          trendlines: { 0: {} },
       }
    });
    pi_temp.draw();
  });

  // make csv request, return promise
  function makeRequest(oggidata) {
    return $.get("temp/fumarola1-" + oggidata + ".csv", function(csvString) {
      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
      arrayData = arrayData.map(function (row, index) {
        if (index === 0) {
          // return column headings
          return row;
        } else {
          // convert time string to date
          return [new Date(oggidata + 'T' + row[0]), row[1]];
        }
      });

      // combine data
      if (chartData === null) {
        chartData = arrayData;
      } else {
        arrayData.splice(0, 1);
        chartData = chartData.concat(arrayData);
      }
    });
  }
});




//Source: https://stackoverflow.com/questions/68054559


