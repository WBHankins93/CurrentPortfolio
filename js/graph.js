var bubbleData = [
  //[[1,100,10],[1,80,9],[1,60,8],[1,40,7],[1,20,6],[1,10,5],[1,0,0]],
  [[1,100,1],[1,90,1],[1,80,1],[1,70,1],[1,60,1],[1,50,1],[1,40,1],[1,30,1],[1,20,1],[1,10,1],[1,0,11]],
  [[2,100,1],[2,90,1],[2,80,1],[2,70,1],[2,60,1],[2,50,1],[2,40,1],[2,30,1],[2,20,1],[2,10,1],[2,0,11]],
  [[3,100,1],[3,90,1],[3,80,1],[3,70,1],[3,60,1],[3,50,1],[3,40,1],[3,30,1],[3,20,1],[3,10,1],[3,0,11]],
  [[4,100,1],[4,90,1],[4,80,1],[4,70,1],[4,60,1],[4,50,1],[4,40,1],[4,30,1],[4,20,1],[4,10,1],[4,0,11]],
  [[5,100,1],[5,90,1],[5,80,1],[5,70,1],[5,60,1],[5,50,1],[5,40,1],[5,30,1],[5,20,1],[5,10,1],[5,0,11]],
  [[6,100,1],[6,90,1],[6,80,1],[6,70,1],[6,60,1],[6,50,1],[6,40,1],[6,30,1],[6,20,1],[6,10,1],[6,0,11]],
  [[7,100,1],[7,90,1],[7,80,1],[7,70,1],[7,60,1],[7,50,1],[7,40,1],[7,30,1],[7,20,1],[7,10,1],[7,0,11]]
];


var bDown = false;

//Current operation
var bDec = [[1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1]];
//Has the ability to change directions
var bChange = [[0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0]];
//Overrides the value of a node to it's largest value.
var ptr = 9;
var aPtr = [10,9,8,7,6,5,4,3,2,1,0];
var counter = 20;

setInterval(function(){
  //Move the pointer
  for(var col = 0; col < 7; col++){
    bubbleData[col][ptr][2] = 11;
  }

  if(!bDown){
    (ptr > 0)?ptr-- : null;
  }
  else{
    (ptr < 10)?ptr++ : null;
  }
  //Reduce large bubbles.
  for(var col = 0; col < 7; col++){

    for(var row = 0 ; row < 11; row++){
      if(bDec[col][row]){
        (bubbleData[col][row][2] > 0) ? bubbleData[col][row][2]-- : null;
        if(bubbleData[col][row][2] == 0 && bChange[col][row]){
          bChange[col][row] = false;
          bDec[col][row] = false;
        }
      }
      else{
        (bubbleData[col][row][2] < 11)? bubbleData[col][row][2]++ : null;
        if(bubbleData[col][row][2] == 11 && bChange[col][row]){
          bChange[col][row] = false;
          bDec[col][row] = true;
        }
      }
    }
  }
      //Check if a direction change is needed.
    if(counter == 0){
      //Change Direction.
      if(bDown){
        ptr = 10;
        bDown = false;
      }
      else{
        ptr = 0;
        bDown = true;
      }
      counter = 20;
    }
    else{
      counter--;
    }

  zingchart.exec('myChart', 'setseriesvalues', {
    values : bubbleData,
  });
},60);



var myConfig =  {
    "globals":{
        "shadow":false
    },
    "type":"bubble",
    "plot": {
      "marker": {
        "border-width":0
      }
    },
    "plotarea":{
        "alpha":0.3,
        "margin":"dynamic",
        "background-color":"#fff"
    },
    "scale-x":{
        "line-color":"#aaadb3",
        "shadow":0,
        "tick":{
            "line-color":"#aaadb3"
        },
        "minor-ticks":1,
        "minor-tick":{
            "visible":false,
            "line-color":"#aaadb3",
            "shadow":0
        },
        "guide":{
            "line-color":"#aaadb3",
            "alpha":0.3,
            "line-style":"solid"
        },
        "minor-guide":{
            "line-color":"#aaadb3",
            "alpha":0.2,
            "line-style":"dashed"
        },
        "item":{
            "padding-top":"5px",
            "font-family":"Arial",
            "font-size":"11px",
            "font-color":"#676b72"
        },
        "offset-start":"50px",
        "offset-end":"50px"
    },
    "scale-y":{
        "shadow":0,
        "tick":{
            "line-color":"#aaadb3"
        },
        "minor-tick":{
            "visible":false,
            "line-color":"#aaadb3",
            "shadow":0
        },
        "guide":{
            "alpha":0
        },
        "item":{
            "padding-right":"5px",
            "font-family":"Arial",
            "font-size":"11px",
            "font-color":"#676b72"
        },
        "offset-start":"60px",
        "offset-end":"60px",
        "line-color":"#aaadb3",
        "minor-ticks":1
    },
    "tooltip":{
        "text":"Y-Axis Value: %v0<br>X-Axis Value: %v1<br>Bubble Size: %v2",
        "text-align":"left"
    },
    "series":[
        {
            "values":[[1,100,0],
            [1,90,0],
            [1,80,0],
            [1,70,0],
            [1,60,0],
            [1,50,0],
            [1,40,0],
            [1,30,0],
            [1,20,0],
            [1,10,0],
            [1,0,10]],
            "marker":{
                "background-color":"#ebea2f",
                "border-width":"1px",
                "alpha":0.6,
                "border-color":"#fff"
            },
            "palette":0
        },
        {
            "values":[[2,100,0],
            [2,90,0],
            [2,80,0],
            [2,70,0],
            [2,60,0],
            [2,50,0],
            [2,40,0],
            [2,30,0],
            [2,20,0],
            [2,10,0],
            [2,0,10]],
            "marker":{
                "background-color":"#9d9ad1",
                "border-width":"1px",
                "alpha":0.6,
                "border-color":"#fff"
            },
            "palette":1
        },
        {
            "values":[[3,100,0],
            [3,90,0],
            [3,80,0],
            [3,70,0],
            [3,60,0],
            [3,50,0],
            [3,40,0],
            [3,30,0],
            [3,20,0],
            [3,10,0],
            [3,0,10]],
            "marker":{
                "alpha":0.8,
                "background-color":"#29bfe4",
                "border-width":"1px",
                "border-color":"#fff"
            },
            "palette":2
        },
        {
            "values":[[4,100,0],
            [4,90,0],
            [4,80,0],
            [4,70,0],
            [4,60,0],
            [4,50,0],
            [4,40,0],
            [4,30,0],
            [4,20,0],
            [4,10,0],
            [4,0,10]],
            "marker":{
                "alpha":0.8,
                "background-color":"#29e45c",
                "border-width":"1px",
                "border-color":"#fff"
            },
            "palette":3
        },
        {
            "values":[[5,100,0],
            [5,90,0],
            [5,80,0],
            [5,70,0],
            [5,60,0],
            [5,50,0],
            [5,40,0],
            [5,30,0],
            [5,20,0],
            [5,10,0],
            [5,0,10]],
            "marker":{
                "alpha":0.8,
                "background-color":"#e43e29",
                "border-width":"1px",
                "border-color":"#fff"
            },
            "palette":4
        },
        {
            "values":[[6,100],
            [6,90,0],
            [6,80,0],
            [6,70,0],
            [6,60,0],
            [6,50,0],
            [6,40,0],
            [6,30,0],
            [6,20,0],
            [6,10,0],
            [6,0,10]],
            "marker":{
                "alpha":0.8,
                "background-color":"#f19729",
                "border-width":"1px",
                "border-color":"#fff"
            },
            "palette":5
        },
        {
            "values":[[7,100,0],
            [7,90,0],
            [7,80,0],
            [7,70,0],
            [7,60,0],
            [7,50,0],
            [7,40,0],
            [7,30,0],
            [7,20,0],
            [7,10,0],
            [7,0,10]],
            "marker":{
                "alpha":0.8,
                "background-color":"#29f1d2",
                "border-width":"1px",
                "border-color":"#fff"
            },
            "palette":6
        }
    ]
};

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: "500",
	width: "100%"
});
