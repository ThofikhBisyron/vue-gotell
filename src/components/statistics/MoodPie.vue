<script setup lang="ts">
import { 
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
)

import { Pie } from 'vue-chartjs';


const data = {
    labels: [
        'Very Sad',
        'Sad',
        'Neutral',
        'Happy',
        'Very Happy'
    ],
    datasets: [
        {
            data: [5, 15, 20, 25, 35],
            backgroundColor: [
                '#FCA5A5',
                '#FDBA74',
                '#FDE68A',
                '#67E8F9',
                '#86EFAC'
            ],
            borderWidth: 0
        }
    ]
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    }
}

</script>

<template>
  <div
  class="flex justify-center"
  >
    <div>
        <Pie
        :data="data"
        :options="options"/>
    </div>

  </div>
</template>