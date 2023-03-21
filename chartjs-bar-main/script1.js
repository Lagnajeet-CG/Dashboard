const ctx1 = document.getElementById('barChart1');
const ctx2 = document.getElementById('barChart2');

let cac = [71.13, 78.35, 66.52, 60.54];
let clv = [49000, 49000, 49000, 49000];
let roi = [9.49, 13.06, 21.38, 17.45];
let roas = [9.49, 8.71, 10.69, 6.34];

let scatter_chart1 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Social', 'SMS', 'E-Mail', 'Video'],
    datasets: [
      {
      label: 'Customer Aquisition Cost',
      data: [71.13, 78.35, 66.52, 60.54],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        // 'rgba(255, 205, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        // 'rgb(255, 159, 64)',
        // 'rgb(255, 205, 86)',
        // 'rgb(75, 192, 192)',
        // 'rgb(54, 162, 235)',
        // 'rgb(153, 102, 255)',
        // 'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      lineTension: 0.4,        
      radius: 6,
      showLine: true      
    },
    // {
    //   label: 'SMS',
    //   data: [78.35],
    //   backgroundColor: [
    //     'rgba(255 127 80, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgb(255 127 80)',
    //   ],
    //   borderWidth: 1,
    //   lineTension: 0.4,        
    //   radius: 6,
    //   showLine: true      
    // },
    // {
    //   label: 'E-Mail',
    //   data: [60.43],
    //   backgroundColor: [
    //     'rgba(255, 205, 86, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgb(255, 205, 86)',
    //   ],
    //   borderWidth: 1,
    //   lineTension: 0.4,        
    //   radius: 6      
    // },
    // {
    //   label: 'Video',
    //   data: [66.52],
    //   backgroundColor: [
    //     'rgba(255 127 80, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgb(255 127 80)',
    //   ],
    //   borderWidth: 1,
    //   lineTension: 0.4,        
    //   radius: 6,
    //   showLine: true      
    // },
   
    // {
    //   label: 'SMS',
    //   data: [17730,3534,2342],
    //   backgroundColor: [
    //     'rgba(255, 159, 64, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgb(186,41,128)',
    //   ],
    //   borderWidth: 1,
    //   lineTension: 0.4,        
    //   radius: 6      
    // },
    // {
    //   label: 'E-Mail',
    //   data: [14003,2050,2343],
    //   backgroundColor: [
    //     'rgba(255, 205, 86, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgb(255, 205, 86)',
    //   ],
    //   borderWidth: 1,
    //   lineTension: 0.4,        
    //   radius: 6      
    // },
    // {
    //   label: 'Video',
    //   data: [16942,3630,2344],
    //   backgroundColor: [
    //     'rgba(75, 192, 192, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgb(75, 192, 192)',
    //   ],
    //   borderWidth: 1,
    //   lineTension: 0.4,        
    //   radius: 6      
    // }
  
  ]
  },
  options: {
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        //text: 'Cost',
        title: {
          display: true,
          text: 'Customer Aquitition Cost (in $)',
          color: '#191',
          font: {
            family: 'Ubuntu',
            size: 12,
            //style: 'bold',
          },
        }
      },
      x: {
        display: true,
        beginAtZero: false,
        title: {
          display: true,
          text: 'Campaign Type',
          color: '#191',font: {
            family: 'Ubuntu',
            size: 12,
            //style: 'bold',
          },
          
        }
        
      }
    }
  }
});
let scatter_chart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: [ '15-03-2022', '31-03-2022'],
    datasets: [
      
    {
      label: 'SMS',
      data: [0, 78.35],
      backgroundColor: [
        'rgba(255 127 80, 0.2)',
      ],
      borderColor: [
        'rgb(255 127 80)',
      ],
      borderWidth: 1,
      lineTension: 0.4,        
      radius: 6,
      showLine: true      
    },
    {
      label: 'E-Mail',
      data: [0, 71.43],
      backgroundColor: [
        'rgba(255, 205, 86, 0.2)',
      ],
      borderColor: [
        'rgb(255, 205, 86)',
      ],
      borderWidth: 1,
      lineTension: 0.4,        
      radius: 6      
    },
    {
      label: 'Video',
      data: [0, 66.52],
      backgroundColor: [
        'rgba(255, 127, 80, 0.2)',
      ],
      borderColor: [
        'rgb(255 127 80)',
      ],
      borderWidth: 1,
      lineTension: 0.4,        
      radius: 6,
      showLine: true      
    },
   
  ]
  },
  options: {
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        //text: 'Cost',
        title: {
          display: true,
           text: 'Customer Aquitition Cost (in $)',
          color: '#191',
          font: {
            family: 'Ubuntu',
            size: 12,
            //style: 'bold',
          },
        }
      },
      x: {
        display: true,
        beginAtZero: false,
        title: {
          display: true,
          text: 'Campaign Type',
          color: '#191',font: {
            family: 'Ubuntu',
            size: 12,
            //style: 'bold',
          },
          
        }
        
      }
    }
  }
});





const linectx2 = document.getElementById('lineChart1');

new Chart(linectx2, {
  type: 'line',
  data: {
    labels: ['Social', 'Direct', 'By Mail', 'Linkdin', 'Advertisement'],
    datasets: [{
      label: 'Non Learner',
      data: [15656, 17730, 14003,16942, 16452],
      borderWidth: 1
    },
    {
      label: 'Learner',
      data: [4111,3534, 2050, 2050, 3430 ],
      borderWidth: 1
    },
    {
      label: 'Both',
      data: [2341,2342,2343, 2345, 2353],
      borderWidth: 1
    },
    
  
  ]
  },
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        }
      },
    scales: { y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',

      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
    y3: {
      type: 'linear',
      display: true,
      position: 'left',
    },
  
  },
},
 
}
});

function showBarChart(){
  
 

  document.getElementById('pie-chart-div').classList.add('d-none');
  document.getElementById('bar-chart-div').classList.remove('d-none');
  // document.getElementById('line-chart-div').classList.add('d-none');
  document.getElementById('barchart').checked = true;
  document.getElementById('piechart').checked = false;
  // document.getElementById('linechart').checked = false;

}



function showPieChart(){


 
  document.getElementById('bar-chart-div').classList.add('d-none');
  document.getElementById('pie-chart-div').classList.remove('d-none');
  // document.getElementById('line-chart-div').classList.add('d-none');

  document.getElementById('barchart').checked = false;
  // document.getElementById('linechart').checked = true;
  document.getElementById('piechart').checked = false;

}


// function updateChart(dataset, value){
// 
//   console.log(dataset, value);
//   
// 
//   let y_val = cac[dataset] + (cac[dataset] / 10 )  
//   cac[dataset] = y_val;
//   let x_val = roi[dataset] + (roi[dataset] / 10 )  
//   roi[dataset] = x_val;
// 
//   new_val = {x: x_val, y: y_val}
//   
//   updateChartData(scatter_chart, '', new_val, dataset);
// }


function updateChart(checkbox, campaign_type, value){

  console.log('Chart Updatation', checkbox, campaign_type, value);
  console.log('campaign_type',  campaign_type);

  if( checkbox != '' ){

    if(checkbox == 'cac'){
      updateChartData(scatter_chart, 'Customer Aquitition Cost', cac, '', 'Customer Aquitition Cost (in $)');
      
    }
    else if(checkbox == 'clv'){
      updateChartData(scatter_chart, 'Customer Lifetime Value', clv, '', 'Customer Lifetime Value (in $)');
      scatter_chart.options.scales.y.title.text = 'Customer Aquitition Cost (in $)';
    }
    else if(checkbox == 'roi'){
      updateChartData(scatter_chart, 'Return on Investment', roi, '', 'Return on Investment (in %)');
    }
    else if(checkbox == 'roas'){
      updateChartData(scatter_chart, 'Return on Ad Spend', roas, '', 'Return on Ad Spend (in %)');
    }

  }
  else {

    console.log('scatter_chart Data', scatter_chart.data.datasets[0].data);
    new_val = scatter_chart.data.datasets[0].data ;
    new_val[campaign_type] =  Number((new_val[campaign_type] + ((new_val[campaign_type] * Number(value)) / 100)).toFixed(2)); 
    console.log('scatter_chart after update', new_val);
    updateChartData(scatter_chart, '', new_val, campaign_type );

  }


  
}

// function showLineChart(){


 
//   document.getElementById('line-chart-div').classList.remove('d-none');
//   document.getElementById('pie-chart-div').classList.add('d-none');
//   document.getElementById('bar-chart-div').classList.add('d-none');

//   document.getElementById('linechart').checked = true;
//   document.getElementById('barchart').checked = false;
//   document.getElementById('piechart').checked = false;

// }


function showValue(id, campaign_type, value){

  let slider_text = document.getElementById(id);
  console.log('slider value', value);
  slider_text.innerHTML = value;

  updateChart('', campaign_type, value);

}


function toggle(id){
  element = document.querySelector(`#${id}`);
  console.log(element);
  console.log( element.classList);

  if(element.classList.value.includes('d-none')){
      element.classList.remove('d-none');

  }
  else
  {
      element.classList.add('d-none');
  }
}


function updateChartData(chart, label, data, campaign_type, y_title) {
  //chart.data.labels.push(label);
  console.log('Old Values', chart.data.datasets.data)
  console.log('New Values', data)
  console.log('New Values', scatter_chart.options.scales.y.title.text, y_title)

  if( label != ''){
    chart.data.datasets[0].labels = label;
    scatter_chart.options.scales.y.title.text = y_title;
  }

  chart.data.datasets[0].data = data;
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector("#slider-value");

slider.addEventListener("input", function() {
  sliderValue.textContent = slider.value;
  console.log(slider.value);
});

// function getDateRange(){

//   let start_date = document.getElementById('start-date').value; 
//   let end_date = document.getElementById('end-date').value; 

//   // scatter_chart.data.labels = [start_date, end_date];
//   // scatter_chart.update();

//   const getDates = (start_date, end_date, interval) => {
//     const dates = [];
//     let date = start_date;
  
//     while(date <= end_date) {
//       dates.push(date);
//       // adjusted according to @RobG
//       date = new Date(date.setSeconds(date.getSeconds() + interval));
//     }
//     return dates;
//   }
//   let interval = 43800*60;
//   console.log('Date range ', start_date, end_date, interval, start_date, end_date);
// }



// function getDateRange(numDays) {
//    // Get today's date
//     const today = new Date();
//     // Subtract the specified number of days from today's date
//     const startDate = new Date(today.getTime() - numDays * 24 * 60 * 60 * 1000);
//     // Create an array of date strings in the format "YYYY-MM-DD"
//     const dateStrings = [];
//     for (let d = startDate; d <= today; d.setDate(d.getDate() + 1)) {
//       const year = d.getFullYear();
//       const month = ('0' + (d.getMonth() + 1)).slice(-2);
//       const day = ('0' + d.getDate()).slice(-2);
//       const dateString = `${year}-${month}-${day}`;
//       dateStrings.push(dateString);
//     }
//     return dateStrings;
//   }

function getDateRange(){
  let start_date = document.getElementById('start-date').value;
  let end_date = document.getElementById('end-date').value;
  console.log('Date range ', start_date, end_date);
  
  // Calculate the number of days between the start and end dates
  let start = new Date(start_date);
  let end = new Date(end_date);
  let interval = Math.round((end - start) / (1000 * 60 * 60 * 24));
  
  // Create an array of labels with the start date and end date, plus the intervals
  let labels = [start_date];
  for (let i = 1; i <= interval; i++) {
    let d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
    let label = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    labels.push(label);
  }
  labels.push(end_date);
  
  scatter_chart.data.labels = labels;
  scatter_chart.update();
}

//Fetch block
//  async function stockData(){
//   fetch('https://three-dot-my-second-app-dot-data-driven-cx.uc.r.appspot.com/')
//   .then(response => response.json())
//   .then(data => {
//     // Here, the `data` variable contains the parsed JSON response.
//     // You can use it to update your application's state or UI.
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request.
//     console.error(error);
//   });
//  }

//Fetch block
async function stockData(){
  const url= 'https://three-dot-my-second-app-dot-data-driven-cx.uc.r.appspot.com/';
  const response = await fetch(url);
  // wait for the request to be complete
  const datapoints = await response.json();
  console.log(datapoints);
}