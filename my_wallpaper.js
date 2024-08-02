//your parameter variables go here!
let rect_width = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 100;
}

function wallpaper_background() {

  background(249, 195, 234); //pink color

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(rect_width, rect_height);

  strokeWeight(3);
  stroke(214, 79, 128);
  fill(241, 196, 212);
  textSize(27);
  textStyle(BOLDITALIC);
  text('ニャーー', 6, 25); //NekoKaburi

  var neko = color(76, 67, 76);
  fill(neko);
  textSize(39);
  text('▲  ▲', 50, 45); //cat ear
  textSize(55);
  text('丿', 115, 185); //cat tail


  var stg = 1;
  strokeWeight(stg);
  stroke(0, 0, 0);
  fill(219, 230, 219);
  triangle(100, 95, 65, 200, 135, 200);
  fill(255, 229, 219);
  ellipse(100, 100, 90, 70); //body主体


  var tie = color(2, 214, 218) //tie color
  fill(tie);
  stroke(tie);
  triangle(100, 139, 93, 177, 107, 177);
  triangle(93, 178, 100, 190, 107, 178);
  stroke(tie);
  fill(tie);
  triangle(90, 137, 100, 147, 110, 137); //tie领带

  var x = 102;
  var z = 79;
  var v = 121;
  fill(255, 255, 255);
  stroke(0, 0, 0);
  ellipse(z, x, 23, 10);
  ellipse(v, x, 23, 10); //eyes眼


  var 未来 = 39;
  if (未来 >= 39) {
    var lens = color(8, 98, 110); //pupil color 
  }
  fill(lens);
  stroke(0, 0, 0);
  ellipse(80, 102, 10, 10);
  ellipse(120, 102, 10, 10); //lens曈


  var a = 17;
  fill(221, 64, 64);
  ellipse(100, 120, 15, a);
  stroke(0, 0);
  fill(255, 229, 219);
  rect(91, 105, a, 13); //mouth嘴
  var b = 93;
  stroke(0, 0, 0);
  line(b, 118, 107, 118); //lips上唇

  line(75, 90, 90, b);
  line(99, 95, 125, 90); //eyebrows眉

  var miku = color(64, 224, 208) //hair color
  stroke(miku);
  fill(miku);
  triangle(70, 60, 101, 110, 130, 60);
  triangle(52, 65, 49, 120, 100, 65);
  triangle(105, 65, 155, 120, 149, 65);
  ellipse(100, 65, 95, 41); //hair刘海

  stroke(miku);
  fill(miku);
  triangle(144, 60, 170, 120, 185, 70);
  triangle(180, 70, 155, 195, 195, 180); //right tail右马尾
  rect(25, 75, 16, 90);
  triangle(15, 70, 30, 120, 55, 60);
  triangle(20, 75, 10, 180, 55, 195);
  rect(162, 70, 16, 90); //left tail左马尾

  noStroke();
  fill(0, 0, 0);
  rect(145, 50, 10, 25);
  rect(45, 50, 10, 25);
  fill(229, 78, 208);
  rect(149, 51, 2, 23);
  rect(49, 51, 2, 23); //hair clips发饰

  noStroke();
  fill(255, 182, 192);
  ellipse(70, 114, 18, 9);
  ellipse(130, 114, 18, 9); //blushes腮红

  strokeWeight(1.5);
  stroke(214, 87, 79);
  fill(241, 199, 196);
  ellipse(171, 10, 5, 10);
  ellipse(180, 10, 5, 10);
  ellipse(162, 15, 5, 8);
  ellipse(189, 15, 5, 8);
  ellipse(175, 29, 25, 12);
  ellipse(175, 27, 10, 15); //catpaw




}