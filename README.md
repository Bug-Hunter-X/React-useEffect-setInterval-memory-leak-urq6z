# React useEffect setInterval memory leak
This repository demonstrates a common error in React components when using setInterval within the useEffect hook without proper cleanup.  The bug leads to memory leaks and unexpected behavior.

## Bug Description
The component uses `setInterval` to update a counter every second. However, it fails to clear the interval when the component unmounts, resulting in a memory leak. Additionally, the closure over the `count` variable leads to stale closure issues.

## Solution
The solution involves adding a cleanup function to the useEffect hook that clears the interval using `clearInterval` when the component unmounts. The `count` variable is also correctly updated to prevent stale closure problems.

## How to Reproduce
Clone this repository and run `npm install`. Then, run `npm start` to start the development server. You'll see the counter incrementing.  Inspect the browser's developer tools to confirm a memory leak (or use a memory leak profiler tool).
