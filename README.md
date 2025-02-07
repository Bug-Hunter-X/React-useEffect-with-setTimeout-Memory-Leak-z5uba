# React useEffect with setTimeout Memory Leak

This repository demonstrates a common error in React applications involving the `useEffect` hook and `setTimeout`. The issue arises when `setTimeout` is used to update state without proper cleanup, leading to memory leaks and unexpected behavior.

## Problem

The `bug.js` file contains a React component that uses `useEffect` to schedule a state update using `setTimeout`. However, it lacks a cleanup function to cancel the timer when the component unmounts or when the dependency array changes. This results in stale closures and multiple timers potentially running concurrently, eventually causing memory leaks.

## Solution

The `bugSolution.js` file provides the corrected version of the component.  It uses the return value of `useEffect` to implement a cleanup function. The `setTimeout` function is stored in a variable and `clearTimeout` is used to cancel the timer before another one is set or before the component unmounts.