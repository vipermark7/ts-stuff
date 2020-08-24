// JavaScript way
// const express = require('express');
// TypeScript way
// import express from 'express'
// import { app } from 'express'

// Declare var with type
let xz: string = "123"

function x(y: number): number|string {
  if (y == 0) {
    return "String"
  }

  return 123;
}

let output = x(0);

interface Person {
  name: string, // Required
  age: number, /// Required
  handicap?: string // Optional
}

let Bob: Person = {
  "name": "Bob",
  "age": 123
}

// Big boy types
// Arrays
// Promises
// Object
let num_arr: number[] = [1, 2, 3]
let prom_res = prom_func()

function prom_func(): Promise<number> {
  return new Promise((res, rej) => {
    res(1)
    rej("fail")
  })
}