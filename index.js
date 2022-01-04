'use strict'
const overall = document.getElementById('overallChart');
const bread = document.getElementById('bread');
const potato = document.getElementById('potato');
const vegetables = document.getElementById('vegetables');
const fruits = document.getElementById('fruits');
const sugar = document.getElementById('sugar');
const meat = document.getElementById('meat');
const fish = document.getElementById('fish');
const milk = document.getElementById('milk');
const eggs = document.getElementById('eggs');
const oil = document.getElementById('oil');
const tea = document.getElementById('tea');
Chart.defaults.font.size = 18;
Chart.defaults.color = '#fff';
const chartOptions = function (dataArr) {return {
    type: 'line', //bar
    data: {
        labels: [2016, 2017, 2018, 2019, 2020, 2021],
        datasets: [{
            label: 'Уровень инфляции, %',
            data: dataArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid:{
                    color: 'rgb(255,255,255)'
                },


            },
            x: {
                grid:{
                    color: 'rgb(255,255,255)'
                }
            },

        },

    }
} }

const overallData = [20, 30, 10, 27, 17, 19];
const overallChart = new Chart(overall, chartOptions(overallData) ); //общий график

const breadData = [30, 40, 10, 7, 13, 9];
const potatoData = [29, 32, 15, 17, 22, 5];
const vegetablesData =[23,6,87,98,45,23];
const fruitsData = [25, 33, 15, 27, 22, 18];
const sugarData = [28, 33, 19, 27, 12, 18];
const meatData = [23, 35, 15, 22, 22, 14];
const fishData = [16,14, 12, 10, 22, 18];
const milkData =[6, 22, 15, 11, 9, 18] ;
const eggsData =[3, 33, 8, 27, 1, 18] ;
const oildData =[20, 15, 13, 4, 7, 9] ;
const teaData = [5, 4, 3, 2, 3, 4];


const breadChart = new Chart(bread, chartOptions(breadData));
const potatoChart = new Chart(potato, chartOptions(potatoData));
const vegetablesChart = new Chart(vegetables,chartOptions(vegetablesData));
const fruitsChart = new Chart(fruits, chartOptions(fruitsData));
const sugarChart = new Chart(sugar, chartOptions(sugarData));
const meatChart = new Chart(meat, chartOptions(meatData));
const fishChart = new Chart(fish, chartOptions(fishData));
const milkChart = new Chart(milk, chartOptions(milkData));
const eggsChart = new Chart(eggs, chartOptions(eggsData));
const oilChart = new Chart(oil, chartOptions(oildData));
const teaChart = new Chart(tea, chartOptions(teaData));



//---------------- Chart toggle---------------------//

$(document).ready(function(){
        $(".basket-item").click(function(){
            $(".chart-container").eq($(".basket-item").index(this)).addClass("active").siblings().removeClass("active");
            $(".chart-container-overall").removeClass("active");
        });
    }

);

function overallChartToggle(){
    $(".chart-container").removeClass("active")
    $(".chart-container-overall").addClass("active");
}
$(".overall , .inflation-header").click(overallChartToggle);