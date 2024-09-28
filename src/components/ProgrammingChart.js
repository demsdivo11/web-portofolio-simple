import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgrammingChart = () => {
  const data = {
    labels: ['JavaScript', 'C++', 'Golang', 'Python', 'Php','Lua'],
    datasets: [
      {
        label: 'Favorite Programming Languages',
        data: [35, 25, 15, 5, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // JavaScript
          'rgba(54, 162, 235, 0.6)', // C++
          'rgba(255, 206, 86, 0.6)', // Golang
          'rgba(75, 192, 192, 0.6)', // Python
          'rgba(153, 102, 255, 0.6)', // Php
          'rgba(123, 153, 182, 0.6)', // lua



        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(123, 153, 182, 0.6)', 





        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="py-10">
      <h3 className="text-3xl font-bold mb-6 text-center text-gold">Favorite Programming Languages</h3>
      <div className="w-1/3 mx-auto"> {/* Mengubah lebar chart menjadi 1/3 dari container */}
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default ProgrammingChart;
