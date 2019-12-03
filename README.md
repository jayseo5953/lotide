# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sjs5953/lotide`

**Require it:**

`const _ = require('@sjs5953/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head([arr])`: returns an array with the first element of the input array
* `tail([arr])`: retruns an array without the first element
* `middle(arr)`: returns an array with the element in the middle
* `assertArraysEqual([arr1],[arr2]])`: takes in two arrays and assert if they are a perfect match
* `assertEqual(val1,val2)`: takes in two values and assert if they are a perfect match