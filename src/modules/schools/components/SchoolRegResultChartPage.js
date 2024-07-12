import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

export default function SchoolRegResultChartPage({ chartData }) {
    const data = {
        labels: ['Phase 1', 'Phase 2A', 'Phase 2B', 'Phase 2C', 'Phase 2CS', 'Remainding'],
        datasets: [
            {
                label: 'applicants',
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const options = {
        plugins: {
            datalabels: {
                anchor: 'middle',
                align: 'center',
                formatter: (value) => (value === 0 ? '' :`${value}`),
                color: 'black'
            },
            legend: {
                position: 'right',
                display: true,
            }
        }
    };
    return (
        <Doughnut data={data} options={options} />
    )
}