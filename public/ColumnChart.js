var ColumnChart = function(){
  var container = document.querySelector("#column-chart");

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text:"Studio Gihbli Films"
    },
    series:[{
      name:"Studio Gihbli Films By Rating",
      data:[{
        y:10,
        color:'orange',
      },7,3,6,5,4,8,7,7,6,9,6,10,8,7,6,7,8,6,5,]
    }],
    xAxis: {
      categories: ["Castle in the Sky","Grave of the Fireflies","My Neighbor Totoro","Kiki's Delivery Service","Only Yesterday","Porco Rosso","Pom Poko","Whisper of the Heart","Princess Mononoke","My Neighbors the Yamadas","Spirited Away","The Cat Returns","Howl's Moving Castle","Tales from Earthsea","Ponyo","Arrietty","From Up on Poppy Hill","The Wind Rises","The Tale of the Princess Kaguya","When Marnie Was There"]
    }
  });
}