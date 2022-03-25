// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: March 25, 2022
// This file contains the JS functions for index.html

function enterClicked() {
  //Declaring the variable for the triangle's base
  let base = parseInt(document.getElementById("base-length").value)
  //Declaring the variable for side a
  let sideA = parseInt(document.getElementById("side-a-length").value)
  //Declaring the variable for side c
  let sideC = parseInt(document.getElementById("side-c-length").value)
  //Declaring the variable for the triangle's height
  let height = parseInt(document.getElementById("height").value)
  //Adding text in the div in index.html and doing calculations
  document.getElementById("calculate").innerHTML = "The area of the triangle is " + (base * height / 2) + "cm<sup>2</sup>.<br>The perimeter of the triangle is " + (base + sideA + sideC) + "cm."
}