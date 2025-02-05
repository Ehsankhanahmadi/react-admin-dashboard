import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
    const [state, setState] = React.useState<any>({
      
        series: [{
          name: 'Order',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          color: "yellow",
        }, {
          name: 'Customer',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          color: "#F7F7F7"
        }, {
          name: 'Buy',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 230
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              borderRadius: 2,
              borderRadiusApplication: 'end'
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val:any) {
                return "$ " + val + " thousands"
              }
            },
          }
        },
    });

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={230} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }

export default BarChart