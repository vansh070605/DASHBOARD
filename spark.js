// Average Duration Chart
    Highcharts.chart('average-duration-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Average Duration'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
            title: {
                text: 'Duration (mins)'
            }
        },
        series: [{
            name: 'Duration',
            data: [10, 20, 30, 40, 50, 60]
        }]
    });

    // Calc Duration Chart
    Highcharts.chart('calc-duration-chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Calc Duration'
        },
        xAxis: {
            categories: ['EBO', 'HELOC', 'NPL','NQM', 'RPL','RTL', 'SECONDS', 'NQM LOAN ALLOC', 'RTL LOAN ALLOC']
        },
        yAxis: {
            title: {
                text: 'TOTAL DURATION'
            }
        },
        series: [{
            name: 'Duration',
            data: [50, 40, 29, 23, 24.4, 10, 11.5, 22.6, 12.5]
        }]
    });

    // Calc Count Chart
    Highcharts.chart('calc-count-chart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Calc Count Distribution'
        },
        series: [{
            name: 'Count',
            colorByPoint: true,
            data: [
                { name: 'Type 1', y: 30 },
                { name: 'Type 2', y: 70 }
            ]
        }]
    });

    // Report Calc Count Chart
    Highcharts.chart('report-calc-count-chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Report Calc Count'
        },
        xAxis: {
            categories: ['MARKET', 'ECON INDEX', 'RISK', 'REPORTS', 'PERFORMANCE', 'LIQUIDITY REPORT']
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        },
        series: [{
            name: 'Total Count',
            data: [50, 45, 26, 20, 20, 16]
        }]
    });

